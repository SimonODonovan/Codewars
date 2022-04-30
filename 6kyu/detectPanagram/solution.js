/*
    Detect Pangram
    
    A pangram is a sentence that contains every single 
    letter of the alphabet at least once. For example, 
    the sentence "The quick brown fox jumps over the lazy 
    dog" is a pangram, because it uses the letters A-Z at 
    least once (case is irrelevant).

    Given a string, detect whether or not it is a pangram. 
    Return True if it is, False if not. Ignore numbers and 
    punctuation.

 */
function isPangram(string) {
    string = string
        .toLowerCase()
        .split("")
        .filter(char => char.match(/[a-z]/));

    if (string.length < 26)
        return false;

    const usedLetters = {};
    for (let char of string) {
        usedLetters[char] = true;
    }
    const correctKeyCount = Object.keys(usedLetters).length === 26;
    return correctKeyCount;
}

function isPangramAlt(string) {
    const alphaChars = string.toLowerCase().match(/[a-zA-Z]/g);
    const set = new Set(alphaChars);
    return set.size === 26;
  }

module.exports = isPangram;