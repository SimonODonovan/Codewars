'''
Reversed sequence 
    
Build a function that returns an array of integers from 
n to 1 where n>0
'''
# P.aramters R.eturns E.xamples P.suedo code
# Takes in a single integer max
# Returns the list reversed
# [1,2,3] -> [3,2,1]
def reverse_seq(n):
    return list(range(n, 0, -1))
