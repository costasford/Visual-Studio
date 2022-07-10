/**
 * @param {number} num
 * @return {number}
 */

var numberOfSteps = function(num) {
    for(var count=0; num>0; count++) num % 2 ? num-- : num/= 2;
    return count;
};