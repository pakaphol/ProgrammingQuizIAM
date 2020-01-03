

const clean = (str) => str.toLowerCase().replace(/[\W_]/g, '')

const isPalindrome = (str) => {
 
  const cleanStr = clean(str)
  const reverse = cleanStr.split('').reverse().join('')
  return reverse == cleanStr
}

var word = 'Deleveled'
console.log( word , isPalindrome(word))

