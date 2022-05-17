/*
    Decode the Morse code 
    
    Your task is to implement a function that would take 
    the morse code as input and return a decoded human-readable string.
 */
decodeMorse = function (morseCode) {
    function decodeWord(codedWord) {
        return codedWord
            .split(" ")
            .map(codedLetter => MORSE_CODE[codedLetter])
            .join("");
    }
    const codedWords = morseCode.trim().split("   ");
    const decodedSentence = codedWords.map(decodeWord).join(" ");
    return decodedSentence;
}

module.exports = decodeMorse;