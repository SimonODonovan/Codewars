/*
    Growth of a Population
    
    The function nb_year should return n number of 
    entire years needed to get a population greater 
    or equal to p.

    aug is an integer, percent a positive or null floating 
    number, p0 and p are positive integers (> 0)
 */
function nbYear(p0, percent, aug, p) {
    let years = 0;
    while (p0 < p) {
        p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
        years++;
    }
    return years;
}

module.exports = nbYear;