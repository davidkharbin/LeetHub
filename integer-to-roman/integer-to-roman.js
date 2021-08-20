/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num){
    const numerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    
    let roman = '';
    
    for ( let letter in numerals ){
        while ( num - numerals[letter] >= 0 ){
            num -= numerals[letter];
            roman += letter
        }
    }
    
    return roman;
};
