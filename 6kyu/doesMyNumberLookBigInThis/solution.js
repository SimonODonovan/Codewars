/*
    Does my number look big in this?
    
    A Narcissistic Number is a positive number which is 
    the sum of its own digits, each raised to the power 
    of the number of digits in a given base. In this Kata, 
    we will restrict ourselves to decimal (base 10).
    
    Your code must return true or false (not 'true' and 
    'false') depending upon whether the given number is a 
    Narcissistic number in base 10. 
 */
function narcissistic(value) {
    const sum = value
        .toString()
        .split("")
        .reduce((prev, stringValue, _, arr) => prev + Math.pow(stringValue, arr.length), 0);
    return sum == value;
}

module.exports = narcissistic;