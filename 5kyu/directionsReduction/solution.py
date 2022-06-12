'''
Directions Reduction
    
Write a function dirReduc which will take an array of 
strings and returns an array of strings with the needless 
directions removed (W<->E or S<->N side by side).
'''
# P.aramters R.eturns E.xamples P.suedo code
# one list of strings which are directions travelled
# one list of strings with reduced directions
# [n,s,n,s,w,w,e] -> [w]

opposite = { "NORTH": "SOUTH", "SOUTH": "NORTH", "EAST": "WEST", "WEST": "EAST" }
def dirReduc(arr):
    i = 0
    while i < (len(arr)-1):
        curr = arr[i]
        next = arr[i+1]
        if(next == opposite[curr]):
            arr.pop(i)
            arr.pop(i)
            if(i > 0): i -= 1
        else:
            i += 1
    return arr


u = ["NORTH", "SOUTH", "WEST", "SOUTH", "NORTH", "EAST"]
dirReduc(u)
