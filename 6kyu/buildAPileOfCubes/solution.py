def find_nb(m):
    cubeCount = 0
    currentVolume = 0
    while(currentVolume < m):
        cubeCount+=1
        currentVolume += cubeCount**3
    return cubeCount if (currentVolume == m) else -1