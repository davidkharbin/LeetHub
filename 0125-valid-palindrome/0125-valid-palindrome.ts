function isPalindrome(s: string): boolean {
    let arr = s.split('');
    
    let charsOnly = arr
        .map(el => el.toLowerCase())
        .filter(lower => nonAlphaNumeric(lower));
    let end = charsOnly.length - 1;
    let start = 0
    
    while(start < end){
       if (charsOnly[start] !== charsOnly[end]){
            return false;
        }
        
        end--;
        start++;
    }
    
    return true;
};

function nonAlphaNumeric(char: string): boolean{
    const ascii = char.charCodeAt(0)
    return (ascii >= 48) && (ascii <= 57) ||
           (ascii >= 97) && (ascii <= 122) 
};