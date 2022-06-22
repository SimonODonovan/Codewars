/*
    Are You Playing Banjo?
        
    Create a function which answers the question "Are you playing banjo?".
    If your name starts with the letter "R" or lower case "r", you 
    are playing banjo!
 */

// P.aramters R.eturns E.xamples P.suedo code
// Single string parameter of name
// Single string return value of name is/isnt playing banjo
// Rambo -> "Rambo plays banjo" / Bilbo -> "Bilbo does not play banjo"
function areYouPlayingBanjo(name) {
    if(name[0].toLowerCase() == "r") 
        return name + " plays banjo"
    return name + " does not play banjo"
}

module.exports = areYouPlayingBanjo;