/*
    Create Phone Number
    
    Write a function that accepts an array of 10 integers 
    (between 0 and 9), that returns a string of those numbers 
    in the form of a phone number.
 */
function createPhoneNumber(numbers) {
    const areaCode = numbers.slice(0, 3).join("");
    const threeDigits = numbers.slice(3, 6).join("");
    const fourDigits = numbers.slice(6).join("");
    return `(${areaCode}) ${threeDigits}-${fourDigits}`;
}

function createPhoneNumberAlt(numbers) {
    let str = "(xxx) xxx-xxxx";
    for(let number of numbers) {
        str = str.replace("x", number);
    }
    return str;
}

module.exports = createPhoneNumber;