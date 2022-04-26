/*
    Simple Pig Latin
    
    Move the first letter of each word to the end of it, 
    then add "ay" to the end of the word. Leave punctuation 
    marks untouched.
 */
function pigIt(str) {
    return str
        .split(" ")
        .map(word => {
            if(/[a-zA-z]/.test(word)) {
                return word.substring(1) + word[0] + "ay"
            }
            return word
        })
        .join(" ");
}

module.exports = pigIt;