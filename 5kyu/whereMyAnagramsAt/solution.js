/*
    Where my anagrams at?
    
    Write a function that will find all the anagrams of 
    a word from a list. You will be given two inputs a word 
    and an array with words. You should return an array of 
    all the anagrams or an empty array if there are none.
 */
function anagrams(word, words) {
    word = word.split("").sort();
    return words
        .filter(testWord => {
            testWord = testWord.split("").sort();
            if (word.length != testWord.length) return false;
            for (let i = 0; i < word.length; i++) {
                if (word[i] != testWord[i])
                    return false;
            }
            return true;
        });
}

function anagramsAlt(word, words) {
    word = word.split("").sort().join("");
    return words
        .filter(testWord => {
            testWord = testWord.split("").sort().join("");
            return word === testWord;
        });
}

module.exports = anagrams;