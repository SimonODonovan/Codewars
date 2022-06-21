'''
    Calculate average
    
    Write a function which calculates the average of the 
    numbers in a given list.
'''
# P.aramters R.eturns E.xamples P.suedo code
#Takes in a single array that may be empty
#Returns 0 on empty array otherwise average of array values
#[] -> 0 / [1,2,3] -> 2.5

def find_average(numbers):
    if(len(numbers) == 0):
        return  0
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)

from functools import reduce
def find_average_alt(numbers):
    if(len(numbers) == 0): return  0
    return reduce(lambda a,b: a+b, numbers, 0) / len(numbers)

def find_average_alt_again(numbers):
    return sum(numbers) / len(numbers) if numbers else 0