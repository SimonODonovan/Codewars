/*
    Delete occurrences of an element if it occurs more than n times
    
    Given a list and a number, create a new list that contains 
    each number of list at most N times, without reordering.
 */

// P.aramters R.eturns E.xamples P.suedo code
// array / number
// return a new array
// ([1,2,1,1,2], 2) -> [1,2,1,2]
function deleteNth(arr, n) {
    let valueCounter = {};
    let newArray = [];
    arr.forEach(number => {
        let count = number in valueCounter ? valueCounter[number] : 0
        if (count < n) {
            newArray.push(number);
            valueCounter[number] = count + 1;
        }
    });
    return newArray;
}

module.exports = deleteNth;