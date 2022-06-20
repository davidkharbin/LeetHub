function isPalindrome(s: string): boolean{ 
    let start: number  = 0
    let end: number = s.length - 1
    
    while (start < end){
        while ( nonAlphaNumeric(s[start]) && start < end ){
            start++
        }
        
        while ( nonAlphaNumeric(s[end]) && start < end ){
            end--
        } 
        
        
        if ( s[start].toLowerCase() != s[end].toLowerCase() ){
            return false
        }
        
        start++, end--
    }
    
    return true
}


function nonAlphaNumeric(char: string): boolean{
    const ascii = char.toLowerCase().charCodeAt(0)
    return !( (ascii >= 48) && (ascii <= 57) ||
           (ascii >= 97) && (ascii <= 122) )
}