/*
    Regex validate PIN code
    
    ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot 
    contain anything but exactly 4 digits or exactly 6 digits. 
 */
function validatePIN(pin) {
    if ((pin.length !== 4) && (pin.length !== 6)) {
        return false;
    }

    const reducer = (prevVal, currVal) => prevVal && !isNaN(parseInt(currVal));
    const isValidPin = pin.split("").reduce(reducer, true);
    return isValidPin;
}

module.exports = validatePIN;