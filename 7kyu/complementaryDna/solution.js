/*
    Complementary DNA
    
    In DNA strings, symbols 'A' and 'T' are complements 
    of each other, as 'C' and 'G'. You function receives 
    one side of the DNA (string, except for Haskell); you
    need to return the other complementary side.
 */
function DNAStrand(dna) {
    const opposite = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    };

    return dna.split("").map(symbol => opposite[symbol]).join("");
}

module.exports = DNAStrand;