'''
Fake Binary
    
Given a string of digits, you should replace any digit below 5 
with '0' and any digit 5 and above with '1'. Return the resulting string.
'''
# P.aramters R.eturns E.xamples P.suedo code
# input a non-empty single string containing numbers
# returns a string of 1s and 0s based on input numbers
# "35293587235" -> "01010111001"
def fake_bin(s):
    fake_binary_list = []
    for number in s:
        binary = "0" if int(number) < 5 else "1"
        fake_binary_list.append(binary)
    return "".join(fake_binary_list)

def fake_bin_alt(s):
    return "".join(["0" if int(num) < 5 else "1" for num in s])

def fake_bin_alt_again(s):
    return s.translate(str.maketrans("0123456789", "0000011111"))
