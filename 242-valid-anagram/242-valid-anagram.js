/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    let hashS = {};
    let hashT = {};
    
    for (let i = 0; i < s.length; i++){
        let sLetter = s[i];
        let tLetter = t[i];
        
        hashS[sLetter] = hashS[sLetter] + 1 || 1;
        hashT[tLetter] = hashT[tLetter] + 1 || 1;
    } 
    
    for (let letter of s){
        if (hashS[letter] !== hashT[letter]){
            return false;
        }
    }
    
    return true;
};