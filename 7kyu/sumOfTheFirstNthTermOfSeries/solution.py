'''
Sum of the first nth term of Series
    
Your task is to write a function which returns the 
sum of following series up to nth term(parameter).
'''
# P.aramters R.eturns E.xamples P.suedo code
def series_sum(n):
    sum = 0
    divisor = 1
    while n > 0:
        sum += (1 / divisor)
        n -= 1
        divisor += 3
    return "%.2f" % sum

def series_sum_alt_again(n):
    ret = 0
    for i in range(n):
        ret += (1 / (3 * i + 1))
    return f"{ret:.2f}"
