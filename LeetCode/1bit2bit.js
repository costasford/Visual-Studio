/*
@param {number[]} bits
@return {boolean}
*/

var isOneBitCharacter = function(bits) {
    if(bits[bits.length-1]==1 || bits[bits.length-2]==0) return true;
    var i=bits.length-2;
    while(i>=0 && bits[i]!=0) i--;
    return ((bits.length-2-i)%2)==0;
};