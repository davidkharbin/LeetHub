/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    if (s.length % 2 == 1) return false
    let stack = []
    let map = new Map([
        ['{', '}'],
        ['(', ')'],
        ['[', ']']
    ])
    
    for ( let currentChar of s ){
        if ( map.get(currentChar) ){
            stack.push(currentChar)
        } else {
            if ( stack.length == 0 ){
                return false
            }
            
            let last = stack.pop()
            if (map.get(last) != currentChar){
                return false;
            }
        }
    }
    
    return stack.length == 0
}

// const isValid = function(s) {
//     let openers = { '{': 1, '[': 2, '(': 3 }
//     let closers = { '}': 1, ']': 2, ')': 3 }
//     let stack = []
    
//     if ( s.length % 2 == 1 || s[0] in closers ){
//         return false  
//     } 
    
//     for ( let currentChar of s ){
//         if ( currentChar in openers ){
//             stack.push(currentChar)
//             continue
//         } else if ( stack.length == 0 )
//             return false
        
        
        
//         if ( openers[stack.at(-1)] == closers[currentChar] )
//             stack.pop()
//         else stack.push(currentChar)
        
//     }
    
//     return stack.length == 0