/*
    Exes and Ohs
    
    Check to see if a string has the same amount of 'x's 
    and 'o's. The method must return a boolean and be case 
    insensitive. The string can contain any char.
 */
function XO(str) {
    const lookup = {};
    const xoCount = str
        .split("")
        .map(curr => lookup[curr.toLowerCase()] ? lookup[curr.toLowerCase()] += 1 : lookup[curr.toLowerCase()] = 1)
    return lookup.x === lookup.o;
}

module.exports = XO;