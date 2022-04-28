/*
    Sum of odd numbers
    
    Given the triangle of consecutive odd numbers:
    Calculate the sum of the numbers in the nth row of this 
    triangle (starting at index 1) e.g.: (Input --> Output)
 */
function rowSumOddNumbers(n) {
    let row = 1;
    let rowItem = 1;
    while (row < n) {
        rowItem += (2 * row);
        row++;
    }
    let sum = 0;
    for (let i = n; n > 0; n--) {
        sum += rowItem;
        rowItem += 2;
    }
    return sum;
}
console.log(rowSumOddNumbers(42));
module.exports = rowSumOddNumbers;