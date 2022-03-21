/*
    The Hashtag Generator
    
    The marketing team is spending way too much time typing in hashtags.
    Let's help them with our own Hashtag Generator!
    Here's the deal:
    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.
 */
function generateHashtag(str) {
    str = str.trim();
    if (str === "") return false;
    const strRemovedExcessWhitespace = str.replace(/[^a-zA-Z]{2,}/g, " ");

    let hashtagStr = "#";
    for (let i = 0; i < strRemovedExcessWhitespace.length; i++) {
        let currChar = strRemovedExcessWhitespace[i];
        if (currChar !== " ") {
            if (i === 0 || strRemovedExcessWhitespace[i - 1] === " ") {
                currChar = currChar.toUpperCase();
            }
            hashtagStr += currChar;
        }
    }
    return hashtagStr.length < 141 ? hashtagStr : false;
}

module.exports = generateHashtag;