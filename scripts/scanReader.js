function drawLine(start, end, ctx) {
  ctx.beginPath();
  ctx.moveTo(start[0], start[1]);
  ctx.lineTo(end[0], end[1]);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#ff0000";
  ctx.stroke();
}

// check if the object is a corner
function isvertices(obj) {
  return (obj.code == 55 || obj.code == 59 || obj.code == 47 || obj.code == 61);
}

// push the code, the function and the index of each instruction into an array
function index(tab_points, tab_instruc, top_right, top_left, case_width) {
  for (let i = 0; i < tab_points.length; i++) {
    for (let j = 0; j < tab_points[i].length; j++) {
      let cote = top_right.x + (case_width / 2);
      if (tab_points[i][j].x > cote && tab_points[i][j].x < (top_left.x - (case_width / 2))) {
        let index = (tab_points[i][j].x - cote) / case_width;
        index = index - (index % 1);
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

    if (isvertices(e) || (e.y + 10) < top_left.y || (e.y + 10) < top_right.y) {
      num_fonc = -1;
    } else if (e.code >= 103 && e.code <= 143 || e.code >= 205) {   // check if the instruction is a command or a level code
      num_fonc = Math.floor(e.y / case_height);
      tab_points[num_fonc].push(e);
    } else if (e.code >= 157 && e.code <= 181) {                    // check if the instruction is a condition
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

function difficulty(code) {
  switch (code) {
    case 205:
      return 0;
    case 211:
      return 1;
    case 213:
      return 2;
    case 217:
      return 3;
    case 227:
      return 4;
    case 229:
      return 5;
    case 233:
      return 6;
    case 241:
      return 7;
    case 271:
      return 8;
    default:
      return 0;
  }
}

function level(code) {
  switch (code) {
    case 279:
      return 1;
    case 283:
      return 2;
    case 285:
      return 3;
    case 295:
      return 4;
    case 299:
      return 5;
    case 301:
      return 6;
    default:
      return 0;
  }
}

function levelSelect() {
  var difficulty = 0;
  var level = 0;

  tab_instruc.forEach(e => {
    if (e[1] == 3 && e[2] == 6) {
      difficulty = difficulty(e[0]);
    };
    if (e[1] == 3 && e[2] == 7) {
      level = level(e[0]);
    };
  });
  tab_instruc[0][0] = difficulty * 6 + level; 
}

function checkCorner(topcodes) {
  for (let i = 0; i < topcodes.length; i++) {
    switch (topcodes[i].code) {
      case 55:
        top_left = topcodes[i];
        break;
      case 59:
        top_right = topcodes[i];
        break;
      case 47:
        bottom_left = topcodes[i];
        break;
      case 61:
        bottom_rigth = topcodes[i];
        break;
      default:
        break;
    }
  }

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
    var dstCorners = [0, 0, 1200, 0, 1200, 800, 0, 800];
    var perspT = PerspT(srcCorners, dstCorners);

    perspective(topcodes, perspT);

    let height = bottom_left.y - top_left.y;
    let width = top_left.x - top_right.x;
    let case_height = (height / 4);
    let case_width = (width / 9);

    tri_fonction(topcodes, case_height, top_right, top_left);

    tab_instruc = [[0]];

    index(tab_points, tab_instruc, top_right, top_left, case_width);
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