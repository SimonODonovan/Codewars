/*
    Convert PascalCase string into snake_case
    
    Complete the function/method so that it takes a 
    PascalCase string and returns the string in 
    snake_case notation. Lowercase characters can be 
    numbers. If the method gets a number as input, it 
    should return a string.
 */
function toUnderscore(string) {
    if(Number.isInteger(string)) return `${string}`;

    return string[0].toLowerCase() + string
        .split("")
        .slice(1)
        .map(char => {
            if(char === char.toUpperCase() && isNaN(+char)) {
                return `_${char.toLowerCase()}`;
            } else {
                return char;
            }
        })
        .join("");
}

module.exports = toUnderscore;