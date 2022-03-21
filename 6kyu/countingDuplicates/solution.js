/*
    Counting Duplicates
    
    Write a function that will return the count of distinct 
    case-insensitive alphabetic characters and numeric digits 
    that occur more than once in the input string. The input 
    string can be assumed to contain only alphabets 
    (both uppercase and lowercase) and numeric digits.
 */
function duplicateCount(text) {
    const chars = {};
    for (const char of text.toLowerCase()) {
        chars[char] === undefined ? chars[char] = 1 : chars[char] += 1
    }
    const res = Object.values(chars).reduce((prev, curr) => {
        return curr > 1 ? prev + 1 : prev;
    }, 0);
    return res;
}

module.exports = duplicateCount;