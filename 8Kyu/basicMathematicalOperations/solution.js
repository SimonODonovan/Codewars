/*
    Basic Mathematical Operations
    
    Your task is to create a function that does four basic mathematical operations.
 */
function basicOp(operation, value1, value2) {
    const opLookup = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
    }
    return opLookup[operation](value1, value2);
}

module.exports = basicOp;