/*
    You're a square!
    
    Given an integral number, determine if it's a square number
 */
var isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n));
}

module.exports = isSquare;