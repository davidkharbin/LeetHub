function isPalindrome(s: string): boolean{ 
    let start: number  = 0
    let end: number = s.length - 1
    
    while (start < end){
        while ( nonAlphaNumeric(s[start]) ){
            start++
            if ( start > end ) return true
        }
        
        while ( nonAlphaNumeric(s[end]) ){
            end--
            if (start > end ) return true
        } 
        
        
        if ( s[start].toLowerCase() != s[end].toLowerCase() ){
            return false
        }
        
        start++
        end--
    }
    
    return true
}


function nonAlphaNumeric(char: string): boolean{
    const ascii = char.toLowerCase().charCodeAt(0)
    return !( (ascii >= 48) && (ascii <= 57) ||
           (ascii >= 97) && (ascii <= 122) )
}