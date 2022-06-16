/*
    Fake Binary
    
    Given a string of digits, you should replace any digit below 5 
    with '0' and any digit 5 and above with '1'. Return the resulting string.
 */

// P.aramters R.eturns E.xamples P.suedo code
// input a non-empty single string containing numbers
// returns a string of 1s and 0s based on input numbers
// "35293587235" -> "01010111001"
function fakeBin(x) {
    return x.split("").map(num_str => num_str < 5 ? 0 : 1).join("");
}

module.exports = fakeBin;