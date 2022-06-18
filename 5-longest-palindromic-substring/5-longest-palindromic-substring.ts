function longestPalindrome(s: string): string {
    
  let length = s.length;
  let result = '';

  const centeredPalindrome = function(left, right) {
    while (left >= 0 && right < length
           && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.slice(left + 1, right);
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
