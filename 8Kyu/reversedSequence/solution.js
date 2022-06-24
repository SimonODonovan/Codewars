/*
    Reversed sequence 
    
    Build a function that returns an array of integers from 
    n to 1 where n>0
 */

// P.aramters R.eturns E.xamples P.suedo code
// Takes in a single list
// Returns the list reversed
// [1,2,3] -> [3,2,1]
const reverseSeq = n => {
    let arr = [...Array(n+1).keys()].reverse();
    arr.pop();
    return arr;
};

module.exports = reverseSeq;