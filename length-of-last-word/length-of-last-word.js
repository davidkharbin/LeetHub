/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  let words = s.split(' ').filter((word) => word);
  let last = words.length - 1;
  return words[last].length;
};