/*
    Count of positives / Sum of negatives
    
    Given an array of integers. Return an array, where the first 
    element is the count of positives numbers and the second element 
    is sum of negative numbers. 0 is neither positive nor negative. 
    If the input is an empty array or is null, return an empty array.
 */
function countPositivesSumNegatives(input) {
    if (!input || input.length == 0) return [];
    const positives = [];
    const negatives = [];
    input.forEach(value => {
        if (value > 0) positives.push(value)
        else if (value < 0) negatives.push(value)
    })

    return [positives.length, negatives.reduce((prev, value) => prev + value, 0)]
}

module.exports = countPositivesSumNegatives;