/*
    Jenny's secret message
    
    Jenny has written a function that returns a greeting 
    for a user. However, she's in love with Johnny, and 
    would like to greet him slightly different. She added 
    a special case to her function, but she made a mistake.
 */

// P.aramters R.eturns E.xamples P.suedo code
function greet(name) {
    if (name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}

module.exports = greet;