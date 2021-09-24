/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if ( needle.length === 0 ) return 0;
  if ( haystack.length < needle.length ) return -1;
  let notFound = -1;

	let start = 0;
	while ( start<= (haystack.length - needle.length) ){
		let end = start + needle.length;
    if ( haystack[start] === needle[0] ){
      if ( haystack.substring(start, end) === needle ){
			  return start;
		  }
    }
    start++;
	}
	return notFound;
};