/*
    Remove String Spaces
    
    Simple, remove the spaces from the string, then return 
    the resultant string.
 */
function noSpace(x) {
    return [...x].filter(char => char !== " ").join("");
}

function noSpaceAlt(x) {
    return x.replace(/\s/g, "");
}

module.exports = noSpace;