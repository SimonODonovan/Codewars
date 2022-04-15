/*
    Unique In Order
    
    Implement the function unique_in_order which takes 
    as argument a sequence and returns a list of items 
    without any elements with the same value next to each 
    other and preserving the original order of elements.
 */
var uniqueInOrder = function (iterable) {
    const uniqueArray = [];
    for(let i=0; i<iterable.length; i++) {
        if(uniqueArray[uniqueArray.length-1] !== iterable[i]) {
            uniqueArray.push(iterable[i]);
        }
    }
    return uniqueArray;
}

module.exports = uniqueInOrder;