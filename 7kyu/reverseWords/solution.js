/*
    Reverse words
    
    Complete the function that accepts a string parameter, and 
    reverses each word in the string. All spaces in the string 
    should be retained.
 */

// P.aramters R.eturns E.xamples P.suedo code
// Take in a single string of multiple words with spaces
// Return a single string with the original words reversed but in the same order
// "Hello World" -> "olleH dlroW"
function reverseWords(str) {
    //split the string by spaces
    //reverse each word
    //join the reversed words together with spaces in between each word
    //return the joined string
    return str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

module.exports = reverseWords;