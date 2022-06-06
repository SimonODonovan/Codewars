/*
    Invert values
    
    Given a set of numbers, return the additive inverse of each. 
    Each positive becomes negatives, and the negatives become positives.
 */

// P.aramters R.eturns E.xamples P.suedo code
// a single array of positive&negative numbers
// return a single integer array with the inverse of each number in param array
// [1,2,-3,-4,5] -> [-1,-2,3,4,-5]
function invert(array) {
    //iterate array
      //multiple each number by -1
    //return resulting array
    return array.map(number => -number);
}

module.exports = invert;