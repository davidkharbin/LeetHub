/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    let openers = { '{': 1, '[': 2, '(': 3 }
    let closers = { '}': 1, ']': 2, ')': 3 }
    let stack = []
    
    if ( s.length < 2 || s[0] in closers ) return false
    
    for ( let currentChar of s ){
        if ( currentChar in openers ){
            stack.push(currentChar)
            continue
        }
        
        let topStack = stack.at(-1)
        if ( openers[topStack] === closers[currentChar] ){
            stack.pop()
        } else {
            stack.push(currentChar)
        }
    }
    
    return stack.length === 0
}