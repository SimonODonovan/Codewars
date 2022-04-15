/*
    Grasshopper - Summation
    
    Write a program that finds the summation of every 
    number from 1 to num. The number will always be a 
    positive integer greater than 0.
 */
var summation = function (num) {
    let i = 1;
    let sum = 0;
    while(i<=num) 
        sum += i++;
    return sum;
}

module.exports = summation;