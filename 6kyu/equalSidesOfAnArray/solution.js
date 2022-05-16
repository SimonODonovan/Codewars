/*
    Equal Sides Of An Array
    
    You are going to be given an array of integers. Your job 
    is to take that array and find an index N where the sum of 
    the integers to the left of N is equal to the sum of the integers 
    to the right of N. If there is no index that would make this happen, 
    return -1.
 */
function findEvenIndex(arr) {
    const total = arr.reduce((a, b) => a + b);
    let leftSide = 0;
    let rightSide = total;
    for (let i = 0; i <= arr.length - 1; i++) {
        leftSide += arr[i - 1] == undefined ? 0 : arr[i - 1];
        rightSide -= arr[i];
        if (leftSide == rightSide) return i;
    }
    return -1;
}

module.exports = findEvenIndex;