/*
    Calculate BMI
    
    Write function bmi that calculates body mass index 
    (bmi = weight / height2).

    if bmi <= 18.5 return "Underweight"
    if bmi <= 25.0 return "Normal"
    if bmi <= 30.0 return "Overweight"
    if bmi > 30 return "Obese"
 */

// P.aramters R.eturns E.xamples P.suedo code
// takes in an integer weight and float height
// returns a single string representing bmi category
// 80, 1.80 -> "Normal"

// Straight if comparisons yield the best performance here
// https://stackoverflow.com/questions/6665997/switch-statement-for-greater-than-less-than
function bmi(weight, height) {
    let bmi = weight/(height**2);
    if (bmi <= 18.5) return "Underweight";
    else if (bmi <= 25.0) return "Normal";
    else if (bmi <= 30.0) return "Overweight";
    else if (bmi > 30) return "Obese";
}

module.exports = bmi;