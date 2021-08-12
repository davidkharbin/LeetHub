/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
    // character codes between 48-57 are numbers, 65-90 are capital letters
    let isValidCharacter = function(char) {
        return ( char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57 ) ||
               ( char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 );
    }
    
    let lowerString =
        s.
        toLowerCase().
        split('').
        filter(isValidCharacter);
 
    if ( lowerString.length === 1 ) {
        return true
    }
    
    for ( let i = 0; i < lowerString.length / 2; i++ ) {
       if (lowerString[i] !== lowerString[lowerString.length - 1 -i]) {
           return false;
       }
    } 
    
    return true;
};