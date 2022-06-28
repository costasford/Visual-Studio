function d6() {
    var roll = Math.random();
    roll = Math.round(roll*6)
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);