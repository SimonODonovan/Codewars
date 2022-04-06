/*
    Mumbling
    
    Transform a string by separating each character with a "-",
    add char position * char and capitalize each first character.
 */
function accum(s) {
    return s
    .split("")
    .map((value, index) => {
        const letterString = new Array(index+1).fill(value.toLowerCase()).join("");
        const capitalized = letterString.charAt(0).toUpperCase() + letterString.slice(1);
        return capitalized;
    })
    .join("-");
}

function accum2(s) {
    return s
    .split("")
    .map((value, index) => value.toUpperCase() + value.toLowerCase().repeat(index))
    .join("-");
}

module.exports = accum;