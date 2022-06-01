/*
    Odd or Even?
    
    Given a list of integers, determine whether the sum of 
    its elements is odd or even.
 */
function oddOrEven(array) {
    const sum = array.reduce((prev, curr) => prev + curr, 0);
    const sumOddOrEven = sum % 2 == 0 ? "even" : "odd";
    return sumOddOrEven;
}

module.exports = oddOrEven;