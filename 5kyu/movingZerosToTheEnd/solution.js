/*
    Moving Zeros To The End
    
    Write an algorithm that takes an array and moves 
    all of the zeros to the end, preserving the order 
    of the other elements.
 */
function moveZeros(arr) {
    return arr.sort((a,b) => b === 0 ? -1 : 1)
}

module.exports = moveZeros;