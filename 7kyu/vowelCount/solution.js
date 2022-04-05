/*
    Vowel Count
    
    Return the number (count) of vowels in the given string.
 */
function getCount(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    return str
      .split("")
      .reduce((prev, char) => vowels.includes(char) ? prev+1 : prev+0, 0)
}

module.exports = getCount;