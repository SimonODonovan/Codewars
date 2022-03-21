/*
    Find the odd int
    
    Given an array of integers, find the one that appears an odd number of times.
    There will always be only one integer that appears an odd number of times.
 */
function findOdd(A) {
    const frequencyObj = {};
    for (const i of A) {
        frequencyObj[i] === undefined ? frequencyObj[i] = 1 : frequencyObj[i] += 1;
    }
    for (const key in frequencyObj) {
        if (frequencyObj[key] % 2 !== 0)
            return parseInt(key);
    }
}

function findOddOnePass(A) {
    A.sort((a, b) => a - b);
    let searchIndex = 0;
    while (searchIndex < A.length) {
        const curr = A[searchIndex];
        const lastIndex = A.lastIndexOf(curr, -1);
        const diff = (lastIndex - searchIndex) + 1;
        if (diff % 2 !== 0) {
            return curr;
        }
        searchIndex = lastIndex + 1;
    }
}

module.exports = findOdd;