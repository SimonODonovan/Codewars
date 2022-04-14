/*
    Persistent Bugger.
    
    Write a function, persistence, that takes in a 
    positive parameter num and returns its 
    multiplicative persistence, which is the 
    number of times you must multiply the digits in 
    num until you reach a single digit.
 */
function persistence(num, calls=0) {
    if(num < 10) {
        return calls;
    } else {
        calls++;
        const multiplicative = num.toString().split("").reduce((prev, digitStr) => prev *= +digitStr, 1);
        return persistence(multiplicative, calls)
    }    
}

module.exports = persistence;