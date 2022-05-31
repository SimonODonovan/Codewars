/*
    Are they the "same"?
    
    Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that 
    checks whether the two arrays have the "same" elements, with the same 
    multiplicities (the multiplicity of a member is the number of times it appears). 
    "Same" means, here, that the elements in b are the elements in a squared, 
    regardless of the order.
 */
function comp(array1, array2) {
    if (!array1 || !array2) return false;
    for (let i = 0; i < array1.length; i++) {
        const value = array1[i];
        const squareLocation = array2.indexOf(value * value);
        if (squareLocation != -1)
            array2.splice(squareLocation, 1);
        else
            return false;
    }
    return array2.length == 0;
}

function compAlt(array1, array2) {
    if (!array1 || !array2) return false;
    const sortF = (a, b) => a - b;
    array1.sort(sortF);
    array2.sort(sortF);
    return array1.map(v => v * v).every((v, i) => array2[i] == v);
}

function compAltAgain(array1, array2) {
    if (!array1 || !array2) return false;
    const sortF = (a, b) => a - b;
    return array1.sort(sortF).map(v => v * v).join() === array2.sort(sortF).join();
}

module.exports = comp;