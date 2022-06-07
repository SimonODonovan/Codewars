/*
    Build a pile of Cubes
    
    Your task is to construct a building which will be a pile of n cubes. 
    The cube at the bottom will have a volume of n^3, the cube above will 
    have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

    You are given the total volume m of the building. Being given m can you 
    find the number n of cubes you will have to build?
 */

// P.aramters R.eturns E.xamples P.suedo code
// single integer parameter of total cube volume
// returns single integer total cube count or -1 if not applicable
// 1 -> 1 | 2 -> -1 | 9 -> 2
function findNb(m) {
    //set a counter for current volume
    //iterate while current volume < target volume (m)
    //return iteration count (cube count) if m=currentVolume | -1
    let currentVolume = 0;
    let cubeCount = 0;
    while (currentVolume < m) {
        cubeCount++;
        currentVolume += Math.pow(cubeCount, 3);
    }
    return (currentVolume == m) ? cubeCount : -1;
}

function findNbAlt(m) {
    let cubeCount = 0;
    while (m > 0) {
        cubeCount++;
        m -= Math.pow(cubeCount, 3);
    }
    return (m == 0) ? cubeCount : -1;
}

module.exports = findNb;