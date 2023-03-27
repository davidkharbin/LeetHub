function isValid(s: string): boolean {
    if (s.length % 2 === 1) return false
    if ('}])'.includes(s[0])) return false
    
    
    const stack = []
    const pairs = new Map([
        [ '(', ')' ],
        [ '{', '}' ],
        [ '[', ']' ],
    ])
    
    
    for (let char of s){
        if (pairs.has(char)) stack.push(char)
        else if ( pairs.get(stack.pop()) !== char) return false
    }
    
    return stack.length === 0 
}