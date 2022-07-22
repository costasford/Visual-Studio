/*
 * @param {string} columnTitle
 * @return {number}
 */

var titleToNumber = function(columnTitle) {
    let res=0;
    for(let i=0;i<columnTitle.length;i++){
        let d = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
        res = res * 26 + d;
    } return res;
};