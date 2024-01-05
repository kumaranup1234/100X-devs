/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // If the cleaned string is different from the original string, return true
  if (cleanedStr !== str.toLowerCase()) {
    return true;
  }

  // Check if the cleaned string is a palindrome
  const size = Math.floor(cleanedStr.length / 2);
  let i = 0;
  let j = cleanedStr.length - 1;
  
  while (i < size && j >= size) {  
    const charI = cleanedStr.charAt(i);
    const charJ = cleanedStr.charAt(j);
    
    if (charI === charJ) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  
  return true;
}


module.exports = isPalindrome;
