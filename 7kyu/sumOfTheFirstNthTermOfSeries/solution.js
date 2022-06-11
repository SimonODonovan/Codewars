/*
    Sum of the first nth term of Series
    
    Your task is to write a function which returns the sum 
    of following series up to nth term(parameter).
 */

// P.aramters R.eturns E.xamples P.suedo code
function SeriesSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += (1 / (3 * i + 1));
    }
    return sum.toFixed(2);
}

module.exports = SeriesSum;