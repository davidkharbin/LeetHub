/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    
    let stack = []
    let map = new Map([
        ['{', '}'],
        ['(', ')'],
        ['[', ']']
    ])
    
    for ( let currentChar of s ){
        if ( map.get(currentChar) ){
            stack.push(currentChar)
        } else if ( stack.length == 0 ){
            return false
        } else {
            let last = stack.pop()
            if (map.get(last) != currentChar){
                return false;
            }
        }
    }
    return stack.length == 0
}