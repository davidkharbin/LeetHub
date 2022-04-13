/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
    if (a === b) return a * 2;
    if (a === 0) return b;
    if (b === 0) return a;
    if (a < 0 && b > 0) return getDifference(a, b);
    if (a > 0 && b < 0) return getDifference(a, b);
    if (a < 0 && b < 0) return -getSum(Math.abs(a), Math.abs(b));
    
    let sum = 0;
    
    while (a > 0 || b > 0){
        if (a > 0) sum++;
        if (b > 0) sum++;
        a--;
        b--;
    }
    
    
    return sum;
};

const getDifference = (a, b) => {
    let isNegative = false;
    let absA = Math.abs(a);
    let absB = Math.abs(b);
    let larger  = absA > absB ? absA : absB;
    let smaller = absA < absB ? absA : absB;
    let difference = 0;
    
    if (a < 0 && absA > absB) isNegative = true;
    if (b < 0 && absB > absA) isNegative = true;
    
    while (larger > smaller) {
        difference++;
        larger--;
    }

    if (isNegative) return -difference;
    
    return difference;
};