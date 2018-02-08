// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   let obj = {}
//   for (let el of str) {
//     if (obj[el] += 1) {
//     obj[el] += 1
//   } else {
//     obj[el] = 1
//     }
//   }
//   let sorted = Object.keys(obj).sort((a,b) => {
//     obj[b] - obj[a]
//   })
//   return sorted[0]
// }

function maxChar(str) {
  let obj = {}
  let max = 0
  let maxChar = ''

  for (let el of str) {
    if (obj[el] += 1) {
    obj[el] += 1
  } else {
    obj[el] = 1
    }
  }

  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char]
      maxChar = char
    }
  }

  return maxChar
}

module.exports = maxChar;
