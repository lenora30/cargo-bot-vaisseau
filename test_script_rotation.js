
var topcodes = [];

// var ctx = document.querySelector("#video-canvas").getContext('2d');

// ctx.strokeRect(200, 60, 900, 600);
// ctx.strokeStyle = "#ff0000";



function norm(vec) {
  return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
}

function angle(vec1, vec2) {
  return (Math.acos(dot_product(vec1, vec2) / (norm(vec1) * norm(vec2))));
}

function dot_product(vec1, vec2) {
  return (vec1[0] * vec2[0] + vec1[1] * vec2[1]);
}

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

function drawLine(start, end, ctx) {
  ctx.beginPath();
  ctx.moveTo(start[0], start[1]);
  ctx.lineTo(end[0], end[1]);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#ff0000";
  ctx.stroke();
}

function liveDebug(ctx) {
  //création des 4 variables pour 
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

  drawLine([haut_droite.x, haut_droite.y], [bas_droite.x, bas_droite.y], ctx);
  drawLine([bas_droite.x, bas_droite.y], [bas_gauche.x, bas_gauche.y], ctx);
  drawLine([bas_gauche.x, bas_gauche.y], [haut_gauche.x, haut_gauche.y], ctx);
  drawLine([haut_gauche.x, haut_gauche.y],[haut_droite.x, haut_droite.y], ctx);

  //translation de tout les points, avec 59 en (0,0)
  for (let i = 0; i < topcodes.length; i++) {
    if (topcodes[i].code != haut_droite.code) {
      topcodes[i].x -= haut_droite.x;
      topcodes[i].y -= haut_droite.y;
    }
  }
  haut_droite.x = 0;
  haut_droite.y = 0;

  //applicatin de la matrice de rotation
  let cos_a = Math.cos(-angle([bas_droite.x, bas_droite.y], [0, 1]));
  let sin_a = Math.sin(-angle([bas_droite.x, bas_droite.y], [0, 1]));

  let matrix = [[cos_a, -sin_a], [sin_a, cos_a]];
  for (let i = 0; i < topcodes.length; i++) {
    let nv = matrix_vec_mult(matrix, [topcodes[i].x, topcodes[i].y]);
    topcodes[i].x = nv[0];
    topcodes[i].y = nv[1];
  }

}

// register a callback function with the TopCode library
TopCodes.setVideoFrameCallback("video-canvas", function (jsonString) {

  // convert the JSON string to an object
  var json = JSON.parse(jsonString);

  // get the list of topcodes from the JSON object
  topcodes = json.topcodes;

  // obtain a drawing context from the <canvas> 
  var ctx = document.querySelector("#video-canvas").getContext('2d');

  ctx.fillStyle = "rgba(255, 0, 0)";   // red
  for (i = 0; i < topcodes.length; i++) {
    // ctx.beginPath();
    // ctx.arc(topcodes[i].x, topcodes[i].y, topcodes[i].radius, 0, Math.PI*2, true);
    // ctx.fill();        
    ctx.font = '24px serif';
    ctx.fillText(topcodes[i].code.toString(), topcodes[i].x, topcodes[i].y + 50);
    // liveDebug(ctx);
    ctx.strokeRect(200, 60, 900, 600);
    // ctx.drawImage(image_F0, 100, 100, 500, 500);
  };


  document.getElementById("scan-button").onclick = function () {
    liveDebug(ctx);
    console.log(tableau_points);

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

    let hauteur = bas_gauche.y - haut_gauche.y;
    let largeur = haut_gauche.x - haut_droite.x;
    var hauteur_case = (hauteur/4);
    var largeur_case = (largeur/9);

    tri_fonction(topcodes, hauteur_case, haut_gauche);

    tableau_instruc = [[0]];

    for (let i = 0; i < tableau_points.length; i++) {
      for (let j = 0; j < tableau_points[i].length; j++) {
        let cote = haut_droite.x + (largeur_case/2);
        let index = (tableau_points[i][j].x - cote) / largeur_case;
        index = index - (index % 1);
        tableau_instruc.push([tableau_points[i][j].code, i, 7-index]);
      }
    }
    console.log(tableau_instruc);
  }
});

var tableau_instruc;
var tableau_points = [];
var f0 = [];
var f1 = [];
var f2 = [];
var f3 = [];

function tri_fonction(topcodes, hauteur_case, haut_gauche)
{
    f0 = [];
    f1 = [];
    f2 = [];
    f3 = [];
    
    var points = []

    for (let i = 0; i < topcodes.length; i++) {
        if(topcodes[i].y < (hauteur_case + haut_gauche.y) && topcodes[i].code != 55 && topcodes[i].code != 59 && topcodes[i].code != 47 && topcodes[i].code != 61)
        {
            f0.push(topcodes[i]);
        }
        else
        {            
            if(topcodes[i].y >= (hauteur_case + haut_gauche.y) && topcodes[i].y < (hauteur_case*2 + haut_gauche.y) && topcodes[i].code != 55 && topcodes[i].code != 59 && topcodes[i].code != 47 && topcodes[i].code != 61)
            {
                f1.push(topcodes[i]);
            }
            else
            {
                if(topcodes[i].y >= (hauteur_case*2 + haut_gauche.y) && topcodes[i].y < (hauteur_case*3 + haut_gauche.y) && topcodes[i].code != 55 && topcodes[i].code != 59 && topcodes[i].code != 47 && topcodes[i].code != 61)
                {
                    f2.push(topcodes[i]);              
                }
                else
                {
                    if(topcodes[i].y < (hauteur_case*4 + haut_gauche.y) && topcodes[i].code != 55 && topcodes[i].code != 59 && topcodes[i].code != 47 && topcodes[i].code != 61)
                    {
                        f3.push(topcodes[i]);
                    }
                }
            }
        }    
    }

    points.push(f0);
    points.push(f1);
    points.push(f2);
    points.push(f3); 

    tableau_points = points;
}

function taille(obj1, obj2)
{
    let taille;

    return taille;
}