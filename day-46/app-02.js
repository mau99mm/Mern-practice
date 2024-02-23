const nm = 'without template literals, if you wanted to return '

console.log(`Length of string is : ${nm.length}`)
console.log(`Uppercase : ${nm.toUpperCase()}`)
console.log(`Lowecase : ${nm.toLowerCase()}`)
console.log(`Char At : ${nm.charAt(2)}`)
const arr = nm.split('')
console.log(arr)

const arr2 = nm.split(' ')
console.log(arr2)

const strFrts = "apple,orange,banana,grape"
const fruits = strFrts.split(',',2)
console.log(fruits)

