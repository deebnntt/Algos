// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   const reversed = str.split('').reverse().join('')
//   return str === reversed
// }

// function palindrome(string) {
//   let x = string.length
//
//   if (x < 2) {
//     return true
//   }
//   else if (string[x-1] === string[0]) {
//     return palindrome(string.substring((x-1), 1))
//   }
//   else {
//     return false
//   }
// }

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  })
}

module.exports = palindrome;