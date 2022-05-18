/*
    Find the unique number
    
    There is an array with some numbers. All 
    numbers are equal except for one. Try to find it!
 */
function findUniq(arr) {
    const filterFirst = arr.filter(val => val === arr[0]);
    if (filterFirst.length == 1) return filterFirst[0];
    const oddValue = arr.filter(val => val !== arr[0])[0];
    return oddValue;
}

function findUniqAlt(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        const prevDiff = arr[i - 1] !== arr[i];
        const nextDiff = arr[i + 1] !== arr[i];
        if (prevDiff) {
            return (arr[i - 1] == arr[i + 1]) ? arr[i] : arr[i - 1]
        } else if (nextDiff) {
            return (arr[i - 1] == arr[i + 1]) ? arr[i] : arr[i + 1]
        }
    }
}

function findUniqAltTwo(arr) {
    if (arr[0] != arr[1] && arr[0] !== arr[2]) return arr[0];
    return arr.find(val => val !== arr[0]);
}

module.exports = findUniq;