/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let notFound = -1;

	let start = 0;
	while ( start<= (haystack.length - needle.length) ){
		let end = start + needle.length;

		if ( haystack.substring(start, end) === needle ){
			return start;
		} 
    
    start++;
	}
	return notFound;
};