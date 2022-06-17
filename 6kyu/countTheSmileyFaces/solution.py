'''
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
'''
# P.aramters R.eturns E.xamples P.suedo code
# Single list of strings representing emoticon faces
# Return a single integer of count of smiling emoticon faces found
# [';D', ':-(', ':-)', ';~)'] -> 3
# [';]', ':[', ';*', ':$', ';-D'] -> 1
def count_smileys(arr):
    # set smiling faces count to 0
    # iterate array content
    # split face at empty string delimiter
    # check first character is : or ;
    # check last character is ) or D
    # if face is 3 characters long
      # check middle character is - or ~
    # return true if all checks match otherwise false
    smiling_faces = 0
    for face in arr:
        split_face = list(face)
        correct_eyes = split_face[0] in [":", ";"]
        correct_mouth = split_face[-1] in [")", "D"]
        correct_nose = True
        if len(split_face) > 2: 
            correct_nose = split_face[1] in ["-", "~"]
        if(correct_eyes and correct_nose and correct_mouth):
            smiling_faces += 1
    return smiling_faces

def count_smileys_alt(arr):
    import re
    return len(re.findall("[:;][-~]?[)D]", " ".join(arr)))


count_smileys_alt([':D',':~)',';~D',':)'])