/*
    Descending Order
    
    Your task is to make a function that can take any 
    non-negative integer as an argument and return it 
    with its digits in descending order. Essentially, 
    rearrange the digits to create the highest possible number.
 */
function descendingOrder(n) {
    if (n < 10) return n;

    const arr = new Array(10);
    arr.fill(0);
    const digits = n.toString().split("");
    for (let digit of digits) {
        arr[parseInt(digit)] += 1;
    }

    let x = 9;
    let decendingStr = "";
    while (x > -1) {
        while (arr[x] > 0) {
            decendingStr += x;
            arr[x]--;
        }
        x--;
    }

    return parseInt(decendingStr);
}

module.exports = descendingOrder;