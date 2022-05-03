/*
    Century From Year
    
    Given a year, return the century it is in.
 */
function century(year) {
    let century = 0;
    while (year > 0) {
        year -= 100;
        century++;
    }
    return century;
}

module.exports = century;