/*
    Tribonacci Sequence
    
    You need to create a fibonacci function that given a signature 
    array/list, returns the first n elements - signature included
    of the so seeded sequence.
 */
function tribonacci(signature, n) {
    let tail = 0;
    let head = 3;

    for(let i=0; i<n; i++) {
        const nextNumber = signature
            .slice(tail, head)
            .reduce((prev, curr) => prev + curr);
        signature.push(nextNumber);
        head++;
        tail++;
    }
    return signature.slice(0, n);
}

module.exports = tribonacci;