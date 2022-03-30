/*
    Convert A Hex String To RGB
    
    Implement a function that takes case-insentive 
    hexadecimal colour string and returns a Map<String, int> 
    with structure {r: x, g: y, b: z}. You can ignore shorthand 
    hex colours.
 */
function hexStringToRGB(hexString) {
    const resultMap = new Map();
    const hexStringSplit = hexString.slice(1).split("").map(hexValue => hexValue.toUpperCase());
    resultMap.set("r", convertHexToRGB(hexStringSplit[0] + hexStringSplit[1]));
    resultMap.set("g", convertHexToRGB(hexStringSplit[2] + hexStringSplit[3]));
    resultMap.set("b", convertHexToRGB(hexStringSplit[4] + hexStringSplit[5]));

    // Note the Kata description asked for Map<String, int> but the actual
    // tests expect a simple object. Leaving inital solution in place and
    // just returning an object at this point to pass the actual requirements.
    const expectedKataResult = {
        "r": convertHexToRGB(hexStringSplit[0] + hexStringSplit[1]),
        "g": convertHexToRGB(hexStringSplit[2] + hexStringSplit[3]),
        "b": convertHexToRGB(hexStringSplit[4] + hexStringSplit[5])
    }
    return expectedKataResult;
}

function convertHexToRGB(hexString) {
    const hexTranslation = {"A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15};
    let result = 0;
    hexString.split("").reverse().forEach((hexValue, index) => {
        const hexAsDec = !isNaN(hexValue) ? +hexValue : hexTranslation[hexValue];
        result += hexAsDec * (Math.pow(16,index)) ;
    });
    return result;
}

// Easy version that satisfies the actual requirement of object instead of
// the Map that was asked for in the instructions.
function hexStringToRGB(hexString) {
    return {
        "r": parseInt(hexString.slice(0, 2), 16),
        "g": parseInt(hexString.slice(2, 4), 16),
        "b": parseInt(hexString.slice(4), 16)
    }
}

module.exports = hexStringToRGB;