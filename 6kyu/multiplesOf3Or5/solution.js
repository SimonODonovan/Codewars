/*
    Multiples of 3 or 5
    
    Return the sum of all the multiples of 3 or 5 below the number passed in
 */
function solution(number) {
    let sum = 0;
    for(let i=3; i<number; i++) {
        if((i % 3 == 0) || (i % 5 == 0)) 
            sum += i
    }
    return sum;
}

module.exports = solution;