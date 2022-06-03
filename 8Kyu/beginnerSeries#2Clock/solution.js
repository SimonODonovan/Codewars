/*
    Beginner Series #2 Clock
    
    Clock shows h hours, m minutes and s seconds after midnight.
    Your task is to write a function which returns the time since midnight in milliseconds.
 */

// P.aramters R.eturns E.xamples P.suedo code
function past(h, m, s) {
    const milliseconds = (((h * 60 * 60) + (m * 60) + s) * 1000);
    return milliseconds;
}

function pastAlt(h, m, s) {
    return Math.round(new Date().setHours(h,m,s) - new Date().setHours(0,0,0));
}

module.exports = past;