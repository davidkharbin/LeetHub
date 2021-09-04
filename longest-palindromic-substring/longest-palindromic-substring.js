/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(string) {
  let length = string.length;
  let result = '';

  const centeredPalindrome = function(left, right) {
    while (left >= 0 && right < length
           && string[left] === string[right]) {
      left--;
      right++;
    }

    return string.slice(left + 1, right);
  };

  for (var i = 0; i < length; i++) {
    let oddPal = centeredPalindrome(i - 1, i + 1);
    let evenPal = centeredPalindrome(i, i + 1);

    if (oddPal.length > result.length) {
      result = oddPal;
    }
    
    if (evenPal.length > result.length) {
      result = evenPal;
    }
  }
  
  return result;
};
