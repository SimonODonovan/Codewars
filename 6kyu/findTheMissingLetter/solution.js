/*
    Find the missing letter
    
    Write a method that takes an array of consecutive (increasing) 
    letters as input and that returns the missing letter in the array.
 */
const alphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

function findMissingLetter(array) {
    const arrayIsLowercase = array[0] == array[0].toLowerCase();
    const startingLetter = array[0].toUpperCase();
    const searchRegion = alphabet.slice(alphabet.indexOf(startingLetter));
    for (let i = 0; i < array.length; i++) {
        const currentChar = array[i].toUpperCase();
        if (searchRegion[i] != currentChar)
            return arrayIsLowercase ? searchRegion[i].toLowerCase() : searchRegion[i].toUpperCase();
    }
}

function findMissingLetterAlt(array) {
    const arrayIsLowercase = array[0] == array[0].toLowerCase();
    array = array.map(char => char.toUpperCase());
    const start = alphabet.indexOf(array[0])
    const searchRegion = alphabet.slice(start, start + array.length + 1);
    const filter = searchRegion.filter(char => !array.includes(char))
    return arrayIsLowercase ? filter[0].toLowerCase() : filter[0];
}

module.exports = findMissingLetter;