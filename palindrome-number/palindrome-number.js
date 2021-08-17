/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x){
    let strArr = x.toString().split('');
    
    while ( strArr.length > 1 ){
        let first = strArr.shift();
        let last = strArr.pop();
        
        if ( first !== last ){
            return false;
        }
    }       
    return true;
};