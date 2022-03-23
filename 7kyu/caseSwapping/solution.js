/*
    Case swapping
    
    Given a string, swap the case for each of the letters.
 */
function swap(str) {
    return str
        .split("")
        .map(letter => {
            return letter == letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
        })
        .join("");
}

module.exports = swap;