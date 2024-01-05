/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let sum1 = 0;
    for (let i = 0; i < str1.length; i++) {
      sum1 += str1.toLowerCase().charCodeAt(i);
    }

    let sum2 = 0;
    for (let i = 0; i < str2.length; i++) {
      sum2 += str2.toLowerCase().charCodeAt(i);
    }

    if(sum1 == sum2){
      return true;
    }else{
      return false;
    }
}

module.exports = isAnagram;
