/*
    Sum of Digits / Digital Root
    
    Given n, take the sum of the digits of n. If that value 
    has more than one digit, continue reducing in this way 
    until a single-digit number is produced. The input will 
    be a non-negative integer.
 */
function digital_root(n) {
    const numberString = n.toString();
    if(numberString.length == 1)
        return n;

    const root = numberString
        .split("")
        .reduce((prev, digit) => prev += Number(digit), 0);

    return digital_root(root);
}

module.exports = digital_root;