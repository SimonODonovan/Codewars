/*
    Math Issues
    
    Oh no, our Math object was "accidently" reset. Can you 
    re-implement some of those functions? We can assure, 
    that only non-negative numbers are passed as arguments. 
    So you don't have to consider things like undefined, null, 
    NaN, negative numbers, strings and so on.
    Implement the following:
        Math.round()
        Math.ceil()
        Math.floor()

 */

Math.round = function (number) {
    if(Number.isInteger(number)) return number;
    const splitNumber = number.toString().split(".");
    if(+splitNumber[1].charAt(0) >= 5) return Math.ceil(number);
    return Math.floor(number);
};

Math.ceil = function (number) {
    if(Number.isInteger(number)) return number;
    const splitNumber = number.toString().split(".");
    return +splitNumber[0] + 1;
};

Math.floor = function (number) {
    if(Number.isInteger(number)) return number;
    const splitNumber = number.toString().split(".");
    return +splitNumber[0];
};