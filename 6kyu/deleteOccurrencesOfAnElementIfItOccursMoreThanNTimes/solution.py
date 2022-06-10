'''
Delete occurrences of an element if it occurs more than n times
    
Given a list and a number, create a new list that contains each number of 
list at most N times, without reordering.
'''
# P.aramters R.eturns E.xamples P.suedo code
# list / number
# return a new list
# ([1,2,1,1,2], 2) -> [1,2,1,2]
def delete_nth(order, max_e):
    # dict
    # iterate list param
      # get value of i
      # add i to new list
      # add 1 to it
    newList = []
    valueCount = {}
    for number in order:
        count = valueCount.get(number, 0)
        if count < max_e:
            newList.append(number)
            valueCount[number] = count + 1
    return newList
