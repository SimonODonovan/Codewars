/*
    Convert string to camel case
    
    Complete the method/function so that it converts 
    dash/underscore delimited words into camel casing. 
    The first word within the output should be capitalized 
    only if the original word was capitalized (known as 
    Upper Camel Case, also often referred to as 
    Pascal case). 
 */
function toCamelCase(str) {
    if(str.length == 0) return "";
    const shouldLowercaseFirst = str[0] == str[0].toLowerCase();
    const split = str.includes("-") ? str.split("-") : str.split("_");
    let camelString = split.map(word => (word[0].toUpperCase() + word.slice(1))).join("");
    if(shouldLowercaseFirst)
        return camelString[0].toLowerCase() + camelString.slice(1);
    return camelString;
}

function toCamelCaseAlt(str) {
    return str.replace(/-|_/, (match) => match.charAt(1).toUpperCase());
}

toCamelCase("the_stealth_warrior")

module.exports = toCamelCase;