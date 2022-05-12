/*
    String ends with?
    
    Complete the solution so that it returns true if the first argument(string) 
    passed in ends with the 2nd argument (also a string). 
 */
function solution(str, ending) {
    let strPointer = str.length - 1;
    let endingPointer = ending.length - 1;
    if (endingPointer > strPointer) return false;

    while (endingPointer >= 0) {
        if (ending[endingPointer] != str[strPointer]) return false;
        endingPointer--;
        strPointer--;
    }
    return true;
}

function solutionAlt(str, ending) {
    const match = str.match(`^.*${ending}$`);
    return match ? true : false;
}

solutionAlt('samurai', 'ai')

module.exports = solution;