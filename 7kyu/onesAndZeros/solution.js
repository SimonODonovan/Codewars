/*
    Ones and Zeros
    
    Given an array of ones and zeroes, convert the equivalent binary value to an integer.
 */
const binaryArrayToNumber = arr => {
    const binStr = arr.reduce((prev,curr) => prev += curr, "");
    return parseInt(binStr, 2);
};

module.exports = binaryArrayToNumber;