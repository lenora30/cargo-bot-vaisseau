// Calculate norm of vector
function norm(vec) {
  return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
}

// Calculate angle between two vectors
function angle(vec1, vec2) {
  return (Math.acos(dot_product(vec1, vec2) / (norm(vec1) * norm(vec2))));
}

// Calculate dot product
function dot_product(vec1, vec2) {
  return (vec1[0] * vec2[0] + vec1[1] * vec2[1]);
}

// Multiplication of two matrix
function matrix_vec_mult(mat, vec) {
  let result = [];
  for (let i = 0; i < mat.length; i++) {
    result.push(0);
    for (let j = 0; j < vec.length; j++) {
      result[i] += mat[i][j] * vec[j];
    }
  }
  return result;
}

// Fonction qui dessine une ligne
function drawLine(start, end, ctx) {
  ctx.beginPath();
  ctx.moveTo(start[0], start[1]);
  ctx.lineTo(end[0], end[1]);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#ff0000";
  ctx.stroke();
}

// Fonction qui translate un tableau de points par rapport à un point
function translation(tab, point){
  console.log(tab.length);
  for (let i = 0; i < tab.length; i++) {
    if (tab[i].code != point.code){
      tab[i].x -= point.x;
      tab[i].y -= point.y;
    }
  }
  point.x = 0;
  point.y = 0;
}

// Matrice de rotation
function rotation_matrix(topcodes, bas_droite, bas_gauche){
  let cos_a;
  let sin_a;

  if(bas_droite.y > bas_gauche.y)
  {
    cos_a = Math.cos(angle([bas_droite.x, bas_droite.y], [0, 1]));
    sin_a = Math.sin(angle([bas_droite.x, bas_droite.y], [0, 1]));
  }
  else
  {
    cos_a = Math.cos(-angle([bas_droite.x, bas_droite.y], [0, 1]));
    sin_a = Math.sin(-angle([bas_droite.x, bas_droite.y], [0, 1])); 
  }


  let matrix = [[cos_a, -sin_a], [sin_a, cos_a]];
  for (let i = 0; i < topcodes.length; i++) {
    let nv = matrix_vec_mult(matrix, [topcodes[i].x, topcodes[i].y]);
    topcodes[i].x = nv[0];
    topcodes[i].y = nv[1];
  }
}

// Verifie si l'objet est un coins
function isvertices(obj){
  return (obj.code == 55 || obj.code == 59 || obj.code == 47 || obj.code == 61);
}

// Créé un tableau avec le code, la fonction et l'index de chaque instructions
function index(tableau_points, tableau_instruc, haut_droite, haut_gauche, largeur_case){
  for (let i = 0; i < tableau_points.length; i++) {
    for (let j = 0; j < tableau_points[i].length; j++) {
      let cote = haut_droite.x + (largeur_case/2);
      if(tableau_points[i][j].x > cote && tableau_points[i][j].x < (haut_gauche.x - (largeur_case/2)))
      {
        let index = (tableau_points[i][j].x - cote) / largeur_case;
        index = index - (index % 1);
        tableau_instruc.push([tableau_points[i][j].code, i, 7-index]);
      }
    }
  }
}

// Diviser tout les codes scannés en fonction de leur emplacement dans 
function tri_fonction(topcodes, hauteur_case, haut_droite, haut_gauche)
{
  tableau_points = [[], [], [], []];
  topcodes.forEach(e => {
    let num_fonc;

    if(isvertices(e) || (e.y + 10) < haut_gauche.y || (e.y + 10) < haut_droite.y) {
      num_fonc = -1;
    } else if(e.code >= 103 && e.code <= 143 || e.code >= 205) {
        num_fonc = Math.floor(e.y/hauteur_case);
        switch (num_fonc) {
          case 0:
            tableau_points[0].push(e);
            break;
          case 1:
            tableau_points[1].push(e);
            break;
          case 2:
            tableau_points[2].push(e);
            break;
          case 3:
            tableau_points[3].push(e);
            break;
          default:
            break;
        }
      } else if (e.code >= 157 && e.code <= 181) {
          num_fonc = Math.floor((e.y - (2 * hauteur_case / 3))/hauteur_case) + 1;
          console.log(num_fonc);
          switch (num_fonc) {
            case 0:
              tableau_points[0].push(e);
              break;
            case 1:
              tableau_points[1].push(e);
              break;
            case 2:
              tableau_points[2].push(e);
              break;
            case 3:
              tableau_points[3].push(e);
              break;
            default:
              break;
          }
      }
  });
}

// register a callback function with the TopCode library
TopCodes.setVideoFrameCallback("video-canvas", function (jsonString) {

  // convert the JSON string to an object
  var json = JSON.parse(jsonString);

  // get the list of topcodes from the JSON object
  topcodes = json.topcodes;

  // draw a circle over the top of each TopCode
  ctx.fillStyle = "rgba(255, 0, 0)";   // very translucent red
  for (i = 0; i < topcodes.length; i++) {      
    ctx.font = '24px serif';
    ctx.fillText(topcodes[i].code.toString(), topcodes[i].x, topcodes[i].y + 50);
    // ctx.strokeRect(200, 60, 900, 600);
  };


  document.getElementById("scanButton").onclick = function(){
    scan(json.topcodes);  
    TopCodes.stopVideoScan('video-canvas');
    document.getElementById("modal").style.display = "none";
  }
});
  
function scan(topcodes) {
  let haut_droite;
  let haut_gauche;
  let bas_droite;
  let bas_gauche;

  for (let i = 0; i < topcodes.length; i++) {
    switch (topcodes[i].code) {
      case 55:
        haut_gauche = topcodes[i];
        break;
      case 59:
        haut_droite = topcodes[i];
        break;
      case 47:
        bas_gauche = topcodes[i];
        break;
      case 61:
        bas_droite = topcodes[i];
        break;
      default:
        break;
    }
  }

  if (haut_droite === undefined || haut_gauche === undefined || bas_gauche === undefined || bas_droite === undefined) {
    alert("Les quatres coins n'ont pas été détecté");
    return;
  }

  translation(topcodes, haut_droite);
  rotation_matrix(topcodes, bas_droite, bas_gauche);

  drawLine([haut_droite.x, haut_droite.y], [bas_droite.x, bas_droite.y], ctx);
  drawLine([bas_droite.x, bas_droite.y], [bas_gauche.x, bas_gauche.y], ctx);
  drawLine([bas_gauche.x, bas_gauche.y], [haut_gauche.x, haut_gauche.y], ctx);
  drawLine([haut_gauche.x, haut_gauche.y],[haut_droite.x, haut_droite.y], ctx);

  let hauteur = bas_gauche.y - haut_gauche.y;
  let largeur = haut_gauche.x - haut_droite.x;
  let hauteur_case = (hauteur/4);
  let largeur_case = (largeur/9);

  tri_fonction(topcodes, hauteur_case, haut_droite, haut_gauche);

  tableau_instruc = [[0]];

  index(tableau_points, tableau_instruc, haut_droite, haut_gauche, largeur_case);

  var difficulty = 0;
  var level = 0;

  tableau_instruc.forEach(e => {
    if (e[1] == 3 && e[2] == 6) {
      difficulty = difficultySelect(e[0]);
    };
    if (e[1] == 3 && e[2] == 7) {
      level = levelSelect(e[0]);
    };
  });
  tableau_instruc[0][0] = difficulty*6+level;

  send(tableau_instruc);
}


var topcodes = [];

var ctx = document.querySelector("#video-canvas").getContext('2d');

var tableau_instruc = [];
var tableau_points = [];

function send(tab) {
	console.log(tab);
	var array = tab;
	var hash = btoa(JSON.stringify(array));
	console.log(hash);
	var frame = document.getElementById("frame");
	frame.src="cargo-not/index.html#"+hash;
  frame.contentWindow.location.reload(true);
}

function difficultySelect(code) {
  switch (code) {
    case 205:
      return 0;
    case 221:
      return 1;
    default:
      return 0;
  }
}

function levelSelect(code) {
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