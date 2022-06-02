/*
    Find the divisors! 
    
    Create a function named divisors/Divisors that takes an integer n > 1 
    and returns an array with all of the integer's divisors(except for 1 
    and the number itself), from smallest to largest. If the number is 
    prime return the string '(integer) is prime'
 */
function divisors(integer) {
    const divisors = [];
    for (let i = 2; i <= integer / 2; i++) {
        if (integer % i == 0) {
            divisors.push(i);
        }
    }
    if (divisors.length == 0)
        return `${integer} is prime`;

    return divisors;
};

module.exports = divisors;