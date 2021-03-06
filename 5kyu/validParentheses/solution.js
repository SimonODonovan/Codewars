/*
    Valid Parentheses
    
    Write a function that takes a string of parentheses, 
    and determines if the order of the parentheses is valid. 
    The function should return true if the string is valid, 
    and false if it's invalid.
 */
function validParentheses(parens) {
    const stack = [];
    for (const paren of parens) {
        if (paren === "(") {
            stack.push(paren)
        } else {
            if (stack.length === 0)
                return false
            stack.pop()
        }
    }
    return stack.length === 0;
}

module.exports = validParentheses;