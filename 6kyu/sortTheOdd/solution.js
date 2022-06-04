/*
    Sort the odd
    
    You will be given an array of numbers. You have to sort the odd 
    numbers in ascending order while leaving the even numbers at their 
    original positions.
 */

// P.aramters R.eturns E.xamples P.suedo code
function sortArray(array) {
    const oddOnlyArray = array.filter(number => number % 2 != 0).sort((a, b) => a - b);
    const oddSortedArray = array.map(number => {
        if (number % 2 == 0)
            return number;
        else
            return oddOnlyArray.shift();
    });
    return oddSortedArray;
}

module.exports = sortArray;