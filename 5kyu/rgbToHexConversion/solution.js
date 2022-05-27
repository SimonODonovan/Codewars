/*
    RGB To Hex Conversion
    
    The rgb function is incomplete. Complete it so that 
    passing in RGB decimal values will result in a hexadecimal 
    representation being returned. Valid decimal values for 
    RGB are 0 - 255. Any values that fall out of that range 
    must be rounded to the closest valid value.
 */
function rgb(r, g, b) {
    const pad = str => str.length == 1 ? `0${str}` : str;
    r = limitHexParameter(r);
    g = limitHexParameter(g);
    b = limitHexParameter(b);
    const rPad = pad(r.toString(16));
    const gPad = pad(g.toString(16));
    const bPad = pad(b.toString(16));
    return `${rPad}${gPad}${bPad}`.toUpperCase();
}

function limitHexParameter(number) {
    number = (number >= 0) ? number : 0;
    number = (number > 255) ? 255 : number;
    return number;
}

module.exports = rgb;