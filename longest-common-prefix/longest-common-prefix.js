/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
    let inputArr = strs.slice();
    let sampleArr = inputArr[0].split('');
    let result = "";
    
    for ( let i = 0; i < sampleArr.length; i++ ){
        for ( let j = 0; j < inputArr.length; j++ ){
            if ( sampleArr[i] !== inputArr[j][i] ){
                return result;
            }
        }
        result += sampleArr[i];
    }
    
    return result;
};