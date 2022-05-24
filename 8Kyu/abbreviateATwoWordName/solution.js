/*
    Abbreviate a Two Word Name
    
    Write a function to convert a name into initials. 
    This kata strictly takes two words with one space in 
    between them.
 */
function abbrevName(name) {
    const splitName = name.split(" ");
    return `${splitName[0][0].toUpperCase()}.${splitName[1][0].toUpperCase()}`;
}

module.exports = abbrevName;