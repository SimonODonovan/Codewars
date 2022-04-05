/*
    Sum of positive
    
    You get an array of numbers, return the sum of all of the positives ones.
 */
function positiveSum(arr) {
    return arr.reduce((prev, value) => (prev + (value > 0 ? value : 0)), 0);
}

module.exports = positiveSum;