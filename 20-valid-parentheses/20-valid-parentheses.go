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
            stack.push(char)
            
        } else if ( stack.length == 0 ){
            return false
        
        } else {
            let last = stack.pop()
            if ( map.get(last) !== char )
               return false
        }
    }
    
    return stack.length === 0
}

// testing LeetHub extension(not working with new UI?)