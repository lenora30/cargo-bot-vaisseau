function drawLine(start, end, ctx) {
  ctx.beginPath();
  ctx.moveTo(start[0], start[1]);
  ctx.lineTo(end[0], end[1]);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#ff0000";
  ctx.stroke();
}

// check if the object is a corner
function isVertices(obj) {
  return (obj.code == CORNER.top_left || obj.code == CORNER.top_right || obj.code == CORNER.bottom_left || obj.code == CORNER.bottom_rigth);
}

// push the code, the function and the index of each instruction into an array
function index(tab_points, tab_instruc, top_right, top_left, case_width) {
  for (let i = 0; i < tab_points.length; i++) {
    for (let j = 0; j < tab_points[i].length; j++) {
      if (tab_points[i][j].x > side && tab_points[i][j].x < (top_left.x - (case_width / 2))) {
        let index = (tab_points[i][j].x - side) / case_width;
        index = Math.floor(index);
        tab_instruc.push([tab_points[i][j].code, i, 7 - index]);
      }
    }
  }
}

// put the codes in the right function
function tri_fonction(topcodes, case_height, top_right, top_left) {
  tab_points = [[], [], [], []];
  topcodes.forEach(e => {
    let num_fonc;

    if (isVertices(e) || (e.y + 10) < top_left.y || (e.y + 10) < top_right.y) {
      num_fonc = -1;
    } else if (e.code >= CODE_MIN_COMMAND && e.code <= CODE_MAX_COMMAND || e.code >= CODE_MIN_DIFFICULTY) {   // check if the instruction is a command or a level code
      num_fonc = Math.floor(e.y / case_height);
      tab_points[num_fonc].push(e);
    } else if (e.code >= CODE_MIN_CONDITION && e.code <= CODE_MAX_CONDITION) {                    // check if the instruction is a condition
      num_fonc = Math.floor((e.y - (2 * case_height / 3)) / case_height) + 1;
      tab_points[num_fonc].push(e);
    }
  });
}

// send the instructions to the carg-bot iframe
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
    if (e[1] == 3 && e[2] == 6 && (e[0] in DIFFICULTY)) {
      difficulty = DIFFICULTY[e[0]];
    };
    if (e[1] == 3 && e[2] == 7 && (e[0] in LEVEL)) {
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

// main function to transform the topcode tab into the instruction tab
function scan(topcodes, sendBool) {
  top_right = null;
  top_left = null;
  bottom_rigth = null;
  bottom_left = null; 

  if (checkCorner(topcodes)) {
    translation(topcodes, top_right);
    rotation_matrix(topcodes, bottom_rigth, bottom_left);

    var srcCorners = [top_right.x, top_right.y, top_left.x, top_left.y, bottom_left.x, bottom_left.y, bottom_rigth.x, bottom_rigth.y];
    var dstCorners = [DST_CORNER.top_left_x, DST_CORNER.top_left_y, DST_CORNER.top_right_x, DST_CORNER.top_right_y, DST_CORNER.bottom_right_x, DST_CORNER.bottom_right_y, DST_CORNER.bottom_left_x, DST_CORNER.bottom_left_y];
    var perspT = PerspT(srcCorners, dstCorners);

    perspective(topcodes, perspT);

    let height = bottom_left.y - top_left.y;
    let width = top_left.x - top_right.x;
    let case_height = (height / 4);
    let case_width = (width / 9);
    let side = top_right.x + (case_width / 2);

    tri_fonction(topcodes, case_height, top_right, top_left);

    tab_instruc = [[0]];

    index(tab_points, tab_instruc, top_right, top_left, case_width, side);
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

var top_right;
var top_left;
var bottom_rigth;
var bottom_left;