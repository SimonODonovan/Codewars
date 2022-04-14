/*
    Credit Card Mask
    
    Your task is to write a function maskify, which 
    changes all but the last four characters into '#'.
 */
function maskify(cc) {
    let maskedCC = "";
    for(let i=0; i<cc.slice(0, -4).length; i++) {
        maskedCC += "#";
    }
    return maskedCC + cc.slice(-4);
}

module.exports = maskify;