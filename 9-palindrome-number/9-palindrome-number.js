/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    let str = x.toString();
    let i = 0;
    let j = str.length - 1;
    
    while (i < j){
        if (str[i] !== str[j]){
            return false;
        }
        i++;
        j--;
        
    } 
    return true;
};