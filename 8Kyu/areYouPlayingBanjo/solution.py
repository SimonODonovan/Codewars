'''
Are You Playing Banjo?
    
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you 
are playing banjo!
'''
# P.aramters R.eturns E.xamples P.suedo code
# Single string parameter of name
# Single string return value of name is/isnt playing banjo
# Rambo -> "Rambo plays banjo" / Bilbo -> "Bilbo does not play banjo"
def are_you_playing_banjo(name):
    if(name[0].lower() == "r"):
        return f"{name} plays banjo"
    return f"{name} does not play banjo"
