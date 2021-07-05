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

function translation(tab, point) {
    console.log(tab.length);
    for (let i = 0; i < tab.length; i++) {
      if (tab[i].code != point.code) {
        tab[i].x -= point.x;
        tab[i].y -= point.y;
      }
    }
    point.x = 0;
    point.y = 0;
}
  
function rotation_matrix(topcodes, bottom_rigth, bottom_left) {
    let cos_a;
    let sin_a;
  
    if (bottom_rigth.y > bottom_left.y) {
      cos_a = Math.cos(angle([bottom_rigth.x, bottom_rigth.y], [0, 1]));
      sin_a = Math.sin(angle([bottom_rigth.x, bottom_rigth.y], [0, 1]));
    }
    else {
      cos_a = Math.cos(-angle([bottom_rigth.x, bottom_rigth.y], [0, 1]));
      sin_a = Math.sin(-angle([bottom_rigth.x, bottom_rigth.y], [0, 1]));
    }
  
  
    let matrix = [[cos_a, -sin_a], [sin_a, cos_a]];
    for (let i = 0; i < topcodes.length; i++) {
      let nv = matrix_vec_mult(matrix, [topcodes[i].x, topcodes[i].y]);
      topcodes[i].x = nv[0];
      topcodes[i].y = nv[1];
    }
}

function perspective(topcodes, pers) {
    topcodes.forEach(e => {
      let srcPt = [e.x, e.y];
      let dstPt = pers.transform(srcPt[0], srcPt[1]);
      e.x = dstPt[0];
      e.y = dstPt[1];
    });
}