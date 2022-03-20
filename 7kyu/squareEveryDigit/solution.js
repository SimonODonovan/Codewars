/*
    Square Digits

    Welcome. In this kata, you are asked to square every digit of a 
    number and concatenate them.
    For example, if we run 9119 through the function, 811181 will 
    come out, because 92 is 81 and 12 is 1.
    Note: The function accepts an integer and returns an integer

 */
    function squareDigits(num) {
        if (num < 2) return num;
    
        let squaredStr = "";
        const digits = num.toString().split("");
        for (let digit of digits) {
            const parsedDigit = parseInt(digit);
            const square = parsedDigit * parsedDigit;
            squaredStr += square;
        }
        return parseInt(squaredStr);
    }
    
    module.exports = squareDigits;