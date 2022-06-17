/*
    Count the smiley faces!
        
    Given an array (arr) as an argument complete the function countSmileys 
    that should return the total number of smiling faces.

    Rules for a smiling face:

        Each smiley face must contain a valid pair of eyes. Eyes can be 
        marked as : or ; A smiley face can have a nose but it does not 
        have to. Valid characters for a nose are - or ~ Every smiling 
        face must have a smiling mouth that should be marked with either 
        ) or D

    No additional characters are allowed except for those mentioned.

    Valid smiley face examples: :) :D ;-D :~)
    Invalid smiley faces: ;( :> :} :]
 */

// P.aramters R.eturns E.xamples P.suedo code
// Single list of strings representing emoticon faces
// Return a single integer of count of smiling emoticon faces found
// [';D', ':-(', ':-)', ';~)'] -> 3
// [';]', ':[', ';*', ':$', ';-D'] -> 1
function countSmileys(arr) {
    if (arr.length == 0) return 0
    let smileys = 0;
    const eyes = [":", ";"]
    const noses = ["-", "~"]
    const mouths = [")", "D"]
    arr.forEach(face => {
        if(face.length > 3) return
        let correct_eyes = eyes.includes(face[0]);
        let correct_mouth = mouths.includes(face[face.length - 1]);
        let correct_nose = true;
        if(face.length > 2)
            correct_nose = noses.includes(face[1])
        if (correct_eyes && correct_mouth && correct_nose)
            smileys++
    });
    return smileys;
}

function countSmileys(arr) {
    if (arr.length == 0) return 0
    return arr
        .filter(face => face.match(/[:;][-~]?[)D]/))
        .length;
}

module.exports = countSmileys;