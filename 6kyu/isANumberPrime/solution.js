/*
    Is a number prime?
    
    Define a function that takes an integer argument and 
    returns a logical value true or false depending on if 
    the integer is a prime.
 */
function isPrime(num) {
    if (num < 2) return false;
    const sqRt = Math.sqrt(num);
    for (let i = 2; i <= sqRt; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}

module.exports = isPrime;