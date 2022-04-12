/*
    Find The Parity Outlier
    
    You are given an array (which will have a length of 
        at least 3, but could be very large) containing 
        integers. The array is either entirely comprised 
        of odd integers or entirely comprised of even 
        integers except for a single integer N. Write 
        a method that takes the array as an argument 
        and returns this "outlier" N.
 */
function findOutlier(integers) {
    let haltIndex;
    for(let i=0; i<integers.length-1; i++) {
        if(Math.abs(integers[i]) % 2 !== Math.abs(integers[i+1]) % 2) {
            haltIndex = i;
            break;
        }
    }
    if(haltIndex===0) {
        if(Math.abs(integers[haltIndex]) % 2 !== Math.abs(integers[haltIndex+2]) % 2) {
            return integers[haltIndex];
        } 
    }
    return integers[haltIndex+1]
}

function findOutlierAlt(integers) { 
    const even = integers.filter(num => num % 2 == 0);
    const odd = integers.filter(num => num % 2 != 0);
    return (even.length == 1) ? even[0] : odd[0];
}

module.exports = findOutlier;