'''
Build Tower
    
Build a pyramid-shaped tower given a positive integer number of floors. 
A tower block is represented with "*" character.
'''
# P.aramters R.eturns E.xamples P.suedo code
# single int parameter
# return a list of strings containing the star patters
# 4 -> ["   *   ", "  ***  ", " ***** ", "*******"] # (n*2)-1


def tower_builder(n_floors):
    stars_list = []
    final_floor_size = (n_floors*2)-1
    while n_floors > 0:
        current_floor_stars = (n_floors*2)-1
        stars_string = "*" * current_floor_stars
        stars_string = f"{stars_string}".center(final_floor_size, " ")
        stars_list.append(stars_string)
        n_floors -= 1
    stars_list.reverse()
    return stars_list


def tower_builder_alt(n):
    return [("*" * (i*2)-1).center(n*2-1) for i in range(1, n+1)]
