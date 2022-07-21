/**
 * @param {string} s
 * @return {number}
 */

var myAtoi = function(s) {
    let i = isNaN(parseInt(s)) ? 0 : parseInt(s);
    if(i > (2**31)-1) i = (2**31)-1;
    else if (i < -(2**31)) i = -(2**31);
    return i;
};