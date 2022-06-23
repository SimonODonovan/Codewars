'''
Calculate BMI
    
Write function bmi that calculates body mass index 
(bmi = weight / height2).

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
'''

# P.aramters R.eturns E.xamples P.suedo code
# takes in an integer weight and float height
# returns a single string representing bmi category
# 80, 1.80 -> "Normal"
def bmi(weight, height):
    bmi = weight/(height**2)
    if (bmi <= 18.5): return "Underweight"
    elif (bmi <= 25.0): return "Normal"
    elif (bmi <= 30.0): return "Overweight"
    elif (bmi > 30): return "Obese"
