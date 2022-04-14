/*
    Replace With Alphabet Position
    
    In this kata you are required to, given a string, 
    replace every letter with its position in the 
    alphabet. If anything in the text isn't a 
    letter, ignore it and don't return it.
 */
function alphabetPosition(text) {
    const a = 97;
    const alphabetPositions = {};
    for (let i = 0; i<26; i++)
        alphabetPositions[String.fromCharCode(a + i)] = i+1;

    text = text.toLowerCase().replace(" ", "");
    const translatedText = text
        .split("")
        .reduce((str, char) => alphabetPositions[char] ? `${str} ${alphabetPositions[char]}` : str, "")
        .trim();
    return translatedText;
}

module.exports = alphabetPosition;