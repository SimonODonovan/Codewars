/*
    Calculate average
    
    Write a function which calculates the average of the 
    numbers in a given list.
 */

// P.aramters R.eturns E.xamples P.suedo code
// Takes in a single array that may be empty
// Returns 0 on empty array otherwise average of array values
// [] -> 0 / [1,2,3] -> 2.5
function find_average(array) {
    if (array.length === 0) return 0
    return array.reduce((prev, val) => prev + val, 0) / array.length;
}

module.exports = find_average;