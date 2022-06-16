/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    let a = s.split('').sort().join('')   
    let b = t.split('').sort().join('')   
    
    return a === b
}