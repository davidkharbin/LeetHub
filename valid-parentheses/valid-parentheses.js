/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(str) {
  if ( str.length % 2 ) return false;
  
  const openings = ['(', '{', '['];
  const closings = [')', '}', ']'];
  
  let stack = [str[0]];
  
  for ( let i = 1; i < str.length; i++ ){
    let currentParen = str[i];
    let lastParen = stack[stack.length - 1];
    
    if ( openings.includes(currentParen) ){
      stack.push(currentParen);
    } else if ( openings.indexOf(lastParen) !== closings.indexOf(currentParen) ){
      return false;
    } else {
      stack.pop();
    }
      
  }
    return !(stack.length > 0);
};