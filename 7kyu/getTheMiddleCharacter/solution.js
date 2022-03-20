/*
    Get the Middle Character

    You are going to be given a word. Your job is to return the 
    middle character of the word. If the word's length is odd, 
    return the middle character. If the word's length is even, 
    return the middle 2 characters.
 */
function getMiddle(s) {
    if (s.length < 2)
        return s;

    let center = Math.round(s.length / 2);
    if (s.length % 2 === 0)
        return s.slice(center - 1, center + 1);
    return s[center - 1];
}

module.exports = getMiddle;