/*
    Highest and Lowest
    
    In this little assignment you are given a string of space 
    separated numbers, and have to return the highest and lowest number.
 */
function highAndLow(numbers) {
    let lo = Infinity;
    let hi = -Infinity

    numbers
        .split(" ")
        .map(number => {
            number = +number;
            if(number < lo) lo = number;
            if(number > hi) hi = number;
        });
    return `${hi} ${lo}`;
}

module.exports = highAndLow;