/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x){
  if ( x < Math.pow(-2, 31) || x > Math.pow(2, 31) ){ return 0; }
  if ( x === 0 ){ return 0; }

  let isNegative = x < 0;
  if ( isNegative ) {x = x * -1}

  let strNums = x.toString();
  let arr = [];

  let i = strNums.length - 1;
  while ( i >= 0 ){
    arr.push(strNums[i]);
    i--;
  }

  if ( isNegative ){ arr.unshift('-') }
  let reversed = Number(arr.join(''));
  
  
  if ( reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) ){ return 0; }
  return reversed;
};