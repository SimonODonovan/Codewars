/*
    Find the smallest integer in the array
    
    Given an array of integers your solution should 
    find the smallest integer. 
 */
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.reduce((prev, curr) => Math.min(prev, curr));
    }

    findSmallestIntAlt(args) {
        return Math.min(...args);
    }
}

module.exports = SmallestIntegerFinder.findSmallestInt;