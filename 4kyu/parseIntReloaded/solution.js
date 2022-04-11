/*
    parseInt() reloaded
    
    In this kata we want to convert a string into an integer. 
    The strings simply represent the numbers in words.
 */

const add = {
    "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6,
    "seven": 7, "eight": 8, "nine": 9, "ten": 10,

    "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14, "fifteen": 15,
    "sixteen": 16, "seventeen": 17, "eighteen": 18, "nineteen": 19,

    "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50, "sixty": 60,
    "seventy": 70, "eighty": 80, "ninety": 90,
}

const multi = { "hundred": 100, "thousand": 1000, "million": 1000000 }


function parseInt(string) {
    let result = 0, current = 0;
    const stringNoAnd = string.split(" ").filter(word => word !== "and").join(" ");
    const noDash = stringNoAnd.split("-").join(" ");
    noDash.split(" ").map(number => {
        if (add[number]) {
            current += add[number];
        } else if (multi[number]) {
            current *= multi[number];

            if(number == "thousand" || number == "million") {
                result += current;
                current = 0;
            }
        }
    });

    result += current;
    return result;
}

module.exports = parseInt;