/**
 * @param {string} s
 * @return {string}
 */
const reverseParentheses = (s) => {
    let str = s.slice();
    let stack = [];
    
    for (let i = 0; i < str.length; i++){
        let char = str[i];
        
        if (char !== ')'){
            stack.push(char);
        } else {
            let reversed = [];
            while(stack[stack.length - 1] !== '('){
                reversed.push(stack.pop());
            }
            stack.pop();
            stack = [...stack, ...reversed];
        }    
    }
    
    return stack.join('');
};