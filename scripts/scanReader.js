
/**
 * Check if the object is a corner
 * @param {object} obj The object to test
 * @return {boolean}
 */
function isVertices(obj) {
  return (obj.code == CORNER.top_right || obj.code == CORNER.top_left || obj.code == CORNER.bottom_right || obj.code == CORNER.bottom_left);
}

/**
 * Check if the point is between the top and the bottom of the grid
 * @param {object} top_left 
 * @param {object} top_right 
 * @param {object} bottom_right 
 * @param {object} bottom_left 
 * @param {object} e The object to test
 * @return {boolean}
 */
function inFunction(top_left, top_right, bottom_right, bottom_left, e) {
  return (((e.y + 10) > top_left.y || (e.y + 10) > top_right.y) && ((e.y + 10) < bottom_left.y || (e.y + 10) < bottom_right.y));
}

/**
 * Check if the point is between the border left and the right of the grid
 * @param {object} top_right 
 * @param {number} case_width 
 * @param {number} side The left side of the grid
 * @param {object} point The object to test
 * @return {boolean}
 */
function inIndex(top_right, case_width, side, point) {
  return (point.x > side && point.x < (top_right.x - (case_width / 2)));
}

/**
 * Push the code, the function and the index of each instruction into an array
 * @param {array} tab_points Array 2D with objects (points) in the right index according to this function (ex : [[a],[]] => a is in f0)
 * @param {array} tab_instruc Array with [0] in the first index.
 * @param {object} top_right
 * @param {number} case_width 
 * @param {number} side 
 */
function index(tab_points, tab_instruc, top_right, case_width, side) {
  for (let i = 0; i < tab_points.length; i++) {
    for (let j = 0; j < tab_points[i].length; j++) {
      if (inIndex(top_right, case_width, side, tab_points[i][j])) {
        let index = Math.floor((tab_points[i][j].x - side) / case_width);
        tab_instruc.push([tab_points[i][j].code, i, 7 - index]); // push for each instructions and commands : the code, the function number and the index in this function
      }
    }
  }
}

/**
 * Put the codes in the right function : f0, f1, f2, f3. On the array tab_points on the form [[A], [B]] => A is in f0 and f1 is in f1.
 * @param {array} topcodes The array with all the objects scan
 * @param {number} case_height 
 * @param {object} top_right 
 * @param {object} top_left
 * @param {object} bottom_left 
 * @param {object} bottom_right 
 * @return {array} tab_points
 */
function tri_fonction(topcodes, case_height, top_right, top_left, bottom_left, bottom_right) {
  let tab_points = [[], [], [], []];
  topcodes.forEach(e => {
    let num_fonc;

    if (!(isVertices(e)) && inFunction(top_left, top_right, bottom_right, bottom_left, e)) {
      if (e.code >= 103 && e.code <= 143 || e.code >= 205) {   // check if the instruction is a command or a level code
        num_fonc = Math.floor(e.y / case_height);
        tab_points[num_fonc].push(e);
      } else if (e.code >= 157 && e.code <= 181) {                    // check if the instruction is a condition
        num_fonc = Math.floor((e.y - (2 * case_height / 3)) / case_height) + 1;
        tab_points[num_fonc].push(e);
      }
    }
  });
  return tab_points;
}


/**
 * Send the instructions to the cargo-bot iframe
 * @param {array} tab The final array with for each instruction : his code, his function, his index in the function
 */
function send(tab) {
  console.log(tab);
  var array = tab;
  var hash = btoa(JSON.stringify(array));
  console.log(hash);
  var frame = document.getElementById("frame");
  frame.src = "cargo-not/index.html#" + hash;
  frame.contentWindow.location.reload(true);
}

/**
 * Put on the array the number of the level selected
 * (0 if there isn't the card level on the grid)
 */
function levelSelect() {
  var difficulty = 0;
  var level = 0;

  tab_instruc.forEach(e => {
    if (e[1] == DIFFICULTY_FONCTION && e[2] == DIFFICULTY_INDEX) {
      difficulty = DIFFICULTY[e[0]];
    };
    if (e[1] == LEVEL_FONCTION && e[2] == LEVEL_INDEX) {
      level = LEVEL[e[0]];
    };
  });
  tab_instruc[0][0] = difficulty * 6 + level;
}

/**
 * This function check if they are all the corners on the array, (if not, a alert windows pop)
 * and put them on the variable.
 * @param {array} topcodes The array with all the objects scan
 * @returns {boolean}
 */
function checkCorner(topcodes) {
  for (let i = 0; i < topcodes.length; i++) {
    switch (topcodes[i].code) {
      case (CORNER.top_left):
        top_left = topcodes[i];
        break;
      case (CORNER.top_right):
        top_right = topcodes[i];
        break;
      case (CORNER.bottom_left):
        bottom_left = topcodes[i];
        break;
      case (CORNER.bottom_right):
        bottom_right = topcodes[i];
        break;
      default:
        break;
    }
  }

  if (top_right === null || top_left === null || bottom_left === null || bottom_right === null) {
    alert("Les quatres coins n'ont pas été détecté");
    return false;
  } else {
    return true;
  }
}

/**
 * Main function to transform the topcode tab into the instruction tab
 * @param {array} topcodes The array with all the objects scan
 * @param {boolean} sendBool This boolean is for know if the array needs to be sent or not
 */
function scan(topcodes, sendBool) {
  top_right = null;
  top_left = null;
  bottom_right = null;
  bottom_left = null;

  if (checkCorner(topcodes)) {

    // To fix the problem with the sheet rotate relative to the photo
    translation(topcodes, top_left);
    rotation_matrix(topcodes, bottom_left, bottom_right);

    // To fix the problem of perspetive
    var srcCorners = [top_left.x, top_left.y, top_right.x, top_right.y, bottom_right.x, bottom_right.y, bottom_left.x, bottom_left.y];
    var dstCorners = [DST_CORNER.top_left_x, DST_CORNER.top_left_y, DST_CORNER.top_right_x, DST_CORNER.top_right_y, DST_CORNER.bottom_right_x, DST_CORNER.bottom_right_y, DST_CORNER.bottom_left_x, DST_CORNER.bottom_left_y];
    var perspT = PerspT(srcCorners, dstCorners);

    perspective(topcodes, perspT);

    let height = bottom_left.y - top_left.y;
    let width = top_right.x - top_left.x;
    let case_height = (height / 4);               // Because we have 4 functions
    let case_width = (width / 9);                 // Because we have 8 cases for each function + 1 case with the side right and the side left of the grid
    let side_left = top_left.x + (case_width / 2);

    let tab_points = tri_fonction(topcodes, case_height, top_right, top_left, bottom_left, bottom_right);

    tab_instruc = [[0]];

    index(tab_points, tab_instruc, top_right, case_width, side_left);
    levelSelect();

    // Check if the array needs to be sent
    if (sendBool) {
      send(tab_instruc);
    }
  }
}

/**
 * The array with all the objects scan
 * @type {array}
 */
var topcodes = [];

/**
 * The array with the objects scan in the good function
 * @type {array}
 */
var tab_instruc = [];

// /**
//  * The final array. The array will have this shape : [[level choise], [code of the instruction, function, index in the function], [code of the instruction, function, index in the function]...]
//  * @type {array}
//  */
// var tab_points = [];

// The four vertices of the grid
var top_right;
var top_left;
var bottom_right;
var bottom_left;