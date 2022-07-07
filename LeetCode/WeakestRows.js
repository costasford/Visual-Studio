/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

var kWeakestRows = function(mat, k) {
    let arr = [];
    
    mat = mat.map(el => el.reduce((acc, cur) => acc + cur,0));
    mat = mat.map((el, ind) => [ind, el]);
    mat = mat.sort((a, b) => a[1] - b[1]);
    
    for(let i=0; i<k; i++){
        arr.push(mat[i][0])
    }
    return arr
};