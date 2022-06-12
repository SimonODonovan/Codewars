/*
    Directions Reduction
    
    Write a function dirReduc which will take an array of strings 
    and returns an array of strings with the needless directions 
    removed (W<->E or S<->N side by side).
 */
// P.aramters R.eturns E.xamples P.suedo code
// one array of strings which are directions travelled
// one array of strings with reduced directions
// [n,s,n,s,w,w,e] -> [w]

opposite = { "NORTH": "SOUTH", "SOUTH": "NORTH", "EAST": "WEST", "WEST": "EAST" }
function dirReduc(arr) {
    let curr, next;
    for(let i = 0; i < arr.length-1; i++) {
        curr = arr[i];
        next = arr[i+1];
        if(opposite[curr] == next) {
            arr.splice(i, 2);
            i>1 ? i-=2 : i=-1
        }
    }
    return arr;
}
let u = ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","WEST"] // [ 'WEST' ]
dirReduc(u) 
module.exports = dirReduc;