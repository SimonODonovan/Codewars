/*
    Two to One
    
    Take 2 strings s1 and s2 including only letters from 
    a to z. Return a new sorted string, the longest possible, 
    containing distinct letters - each taken only once - 
    coming from s1 or s2.
 */
function longest(s1, s2) {
    let lookup = {};
    const combinedString = s1 + s2;
    const uniqueString = combinedString
        .split("")
        .filter(value => {
            const valueInLookup = lookup[value];
            if (!valueInLookup) lookup[value] = true;
            return !valueInLookup;
        })
        .sort()
        .join("");
    return uniqueString;
}

function longestAlt(s1, s2) {
    return [...new Set(s1 + s2)].sort().join("");
}

module.exports = longest;