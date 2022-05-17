/*
    Split Strings
    
    Complete the solution so that it splits the string into 
    pairs of two characters. If the string contains an odd 
    number of characters then it should replace the missing 
    second character of the final pair with an underscore ('_').
 */
function solution(str) {
    str = (str.length % 2 === 0) ? str : `${str}_`;
    return str.match(/(\w{2})/g) || [];
}

function solutionAlt(str) {
    if(str.length === 0) return [];
    str = (str.length % 2 === 0) ? str : `${str}_`;
    str = str.split("");
    for(let i=str.length-2; i>=2; i-=2) {
        str.splice(i, 0, " ")
    }
    return str.join("").split(" ");
}

module.exports = solution;