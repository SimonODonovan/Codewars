/*
    Who likes it?
    
    Implement the function which takes an array containing 
    the names of people that like an item. It must return the 
    display text as shown in the examples:
 */
function likes(names) {
    const nameCount = names.length;
    if(nameCount == 0) {
        return "no one likes this"
    } else if(nameCount == 1) {
        return `${names[0]} likes this`
    } else if(nameCount == 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if(nameCount == 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if(nameCount > 3) {
        return `${names[0]}, ${names[1]} and ${nameCount-2} others like this`
    }
}

function likesAlt(names) {
    const nameCount = names.length;
    switch(nameCount){
        case 0: return "no one likes this"
        case 1: return `${names[0]} likes this`
        case 2: return `${names[0]} and ${names[1]} like this`
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default: return `${names[0]}, ${names[1]} and ${nameCount-2} others like this`
    }
}

module.exports = likes;