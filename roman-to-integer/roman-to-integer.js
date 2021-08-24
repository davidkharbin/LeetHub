/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  
  let chars = s.split('');
  let n = 0;
  
  const romanDouble = {
    CM: 900,
    CD: 400,
    XC: 90,
    XL: 40,
    IX: 9,
    VI: 6,
    IV: 4
  };
  
  const romanSingle = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };
  
  for ( let key in romanDouble ){
    if ( s.indexOf(key) >= 0 ){
      n += romanDouble[key];
      chars.splice(s.indexOf(key), 2);
      s = chars.join('');
    }
  }
  
  for ( let i = 0; i < chars.length; i++ ){
    n += romanSingle[chars[i]];
  }
  
  
  return n;
};