/*
    Find Multiples of a Number
    
    Takes a value, integer , and returns a list of its 
    multiples up to another value, limit.
 */
function findMultiples(integer, limit) {
    const multiples = [];
    let current = integer;
    while(current <= limit) {
        multiples.push(current);
        current += integer;
    }
    return multiples;
}

module.exports = findMultiples;