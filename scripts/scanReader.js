
/**
 * check if the object is a corner
 */
function isVertices(obj) {
  return (obj.code == CORNER.top_left || obj.code == CORNER.top_right || obj.code == CORNER.bottom_left || obj.code == CORNER.bottom_rigth);
}

/**
 * check if the point is between the border left and the right of the grid
 */
function inIndex(top_left, case_width, side, points) {
  return (points.x > side && points.x < (top_left.x - (case_width / 2)));
}

/**
 * check if the point is between the top and the bottom of the grid
 */
function inFunction(top_right, top_left, bottom_left, bottom_rigth, y) {
  return ((y + 10) < top_left.y || (y + 10) < top_right.y || (y + 10) > bottom_left.y || (y + 10) > bottom_rigth.y);
}

/**
 * push the code, the function and the index of each instruction into an array
 */
function index(tab_points, tab_instruc, top_left, case_width, side) {
  for (let i = 0; i < tab_points.length; i++) {
    for (let j = 0; j < tab_points[i].length; j++) {
      if (inIndex(top_left, case_width, side, tab_points[i][j])) {
        let index = Math.floor((tab_points[i][j].x - side) / case_width);
        tab_instruc.push([tab_points[i][j].code, i, 7 - index]); // push for each instructions and commands : the code, the function number and the index in this function
      }
    }
  }
}

/**
 * put the codes in the right function
 */
function tri_fonction(topcodes, case_height, top_right, top_left, bottom_left, bottom_rigth) {
  tab_points = [[], [], [], []];
  topcodes.forEach(e => {
    let num_fonc;

    if (isVertices(e) || inFunction(top_right, top_left, bottom_left, bottom_rigth, e.y)) { 

    } else if (e.code >= CODE_MIN_COMMAND && e.code <= CODE_MAX_COMMAND || e.code >= CODE_MIN_DIFFICULTY) {   // check if the instruction is a command or a difficulty/level code
      num_fonc = Math.floor(e.y / case_height);
      tab_points[num_fonc].push(e);
    } else if (e.code >= CODE_MIN_CONDITION && e.code <= CODE_MAX_CONDITION) {                    // check if the instruction is a condition
      num_fonc = Math.floor((e.y - (2 * case_height / 3)) / case_height) + 1;
      tab_points[num_fonc].push(e);
    }
  });
}

/**
 * send the instructions to the cargo-bot iframe
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


function levelSelect() {
  var difficulty = 0;
  var level = 0;

  tab_instruc.forEach(e => {
    if (e[1] == FONCTION_DIFFICULTY && e[2] == FONCTION_LEVEL && (e[0] in DIFFICULTY)) {
      difficulty = DIFFICULTY[e[0]];
    };
    if (e[1] == INDEX_DIFFICULTY && e[2] == INDEX_LEVEL && (e[0] in LEVEL)) {
      level = LEVEL[e[0]];
    };
  });
  tab_instruc[0][0] = difficulty * 6 + level; 
}


function checkCorner(topcodes) {
  topcodes.forEach(e => {
    switch (e.code) {
      case CORNER.top_left:
        top_left = e;
        break;
      case CORNER.top_right:
        top_right = e;
        break;
      case CORNER.bottom_left:
        bottom_left = e;
        break;
      case CORNER.bottom_rigth:
        bottom_rigth = e;
        break;
      default:
        break;
    }
  });

  if (top_right === null || top_left === null || bottom_left === null || bottom_rigth === null) {
    alert("Les quatres coins n'ont pas été détecté");
    return false;
  } else {
    return true;
  }
}

/**
 * main function to transform the topcode tab into the instruction tab
 */
function scan(topcodes, sendBool) {
  top_right = null;
  top_left = null;
  bottom_rigth = null;
  bottom_left = null; 

  if (checkCorner(topcodes)) {

    // to fix the problem with the sheet rotate relative to the photo
    translation(topcodes, top_right);
    rotation_matrix(topcodes, bottom_rigth, bottom_left); 

    // to fix the problem of perspetive
    var srcCorners = [top_right.x, top_right.y, top_left.x, top_left.y, bottom_left.x, bottom_left.y, bottom_rigth.x, bottom_rigth.y]; // actuals corners
    var dstCorners = [DST_CORNER.top_left_x, DST_CORNER.top_left_y, DST_CORNER.top_right_x, DST_CORNER.top_right_y, DST_CORNER.bottom_right_x, DST_CORNER.bottom_right_y, DST_CORNER.bottom_left_x, DST_CORNER.bottom_left_y]; // destination corners
    var perspT = PerspT(srcCorners, dstCorners);

    perspective(topcodes, perspT);

    let grid_height = bottom_left.y - top_left.y;
    let grid_width = top_left.x - top_right.x; 
    let case_height = (grid_height / 4);    // because we have 4 functions
    let case_width = (grid_width / 9);      //because we have 8 cases for each function + 1 case with the side right and the side left of the grid
    let side_right = top_right.x + (case_width / 2);

    tri_fonction(topcodes, case_height, top_right, top_left, bottom_left, bottom_rigth);

    tab_instruc = [[0]];

    index(tab_points, tab_instruc, top_left, case_width, side_right);

    levelSelect();

    // check if the array needs to be sent
    if (sendBool) {
      send(tab_instruc);
    }
  }
}


var topcodes = [];

var tab_instruc = [];
var tab_points = [];

// four vertices of the grid
var top_right;
var top_left;
var bottom_rigth;
var bottom_left;