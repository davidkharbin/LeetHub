/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
    // character codes between 48-57 are numbers, 65-90 are capital letters
    let isValidCharacter = function(char) {
        return (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57 ) ||
               ( char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 );
    }
    
    let upperString =
        s.
        toUpperCase().
        split('').
        filter(isValidCharacter)
        .join('');
    
    let upperStringReversed =
        upperString.
        split('').
        reverse().
        join('');

    console.log('upperLetters', upperString)
    console.log('reversed', upperStringReversed)
      
    return upperString === upperStringReversed;
};