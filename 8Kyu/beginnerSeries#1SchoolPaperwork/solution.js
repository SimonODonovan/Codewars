/*
    Beginner Series #1 School Paperwork
    
    Your classmates asked you to copy some paperwork for them. You know 
    that there are 'n' classmates and the paperwork has 'm' pages.
    Your task is to calculate how many blank pages do you need. 
    If n < 0 or m < 0 return 0.
 */

// P.aramters R.eturns E.xamples P.suedo code
// two integers
// returns a single integer
// 2, 2 -> 4
function paperwork(n, m) {
    if (n < 0 || m < 0) return 0;
    return n * m;
}


module.exports = paperwork;