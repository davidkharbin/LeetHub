/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
    let arr = []
    
    for ( let i = 0; i < address.length; i++ ){
        if ( address[i] === '.' ){
            arr.push(`[${address[i]}]`)
        } else {
            arr.push(address[i])
        }
    }
    
    return arr.join('')
}