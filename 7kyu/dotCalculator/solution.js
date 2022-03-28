/*
    Dot Calculator
    
    You have to write a calculator that receives strings 
    for input. The dots will represent the number in the 
    equation. There will be dots on one side, an operator, 
    and dots again after the operator. The dots and the operator 
    will be separated by one space.
 */
function dotCalculator(equation) {
    const split = equation.split(" ");
    const operator = split[1];
    const firstOperandLength = split[0].length;
    const secondOperandLength = split[2].length;

    let resultLength = 0;
    if(operator == "+") {
        resultLength = firstOperandLength + secondOperandLength;
    }
    else if(operator == "-") {
        resultLength = firstOperandLength - secondOperandLength;
    }
    else if(operator == "*") {
        resultLength = firstOperandLength * secondOperandLength
    }
    else { // operator == "//"
        resultLength = Math.floor(firstOperandLength / secondOperandLength);
    }

    const resultString = new Array(resultLength).fill(".").join("");

    return resultString;
}

module.exports = dotCalculator;