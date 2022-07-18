/*
@param {number[][]} accounts
@return {number}
*/

var maximumWealth = function(accounts){
    let max = 0;
    for (let customer of accounts) {
        let customerTotal = 0;
        for (let money of customer) {
            customerTotal += money;
        } max = Math.max(max, customerTotal);
    } return max;
}