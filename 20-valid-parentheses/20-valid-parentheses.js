/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(str) {
    
    let stack = []
    let map = new Map([
        ['{', '}'],
        ['(', ')'],
        ['[', ']']
    ])
    
    for ( let char of str ){
        if ( map.has(char) ){
            stack.push(map.get(char))
            
        } else if ( char !== stack.pop() ){
            return false;
        }
    }
    
    return stack.length == 0
}