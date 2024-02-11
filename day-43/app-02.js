const arr = ["abc", "aac", "pqr", "lmn", "zyz", "ppp", "pet", "xrt", "pop"]

const filtered1 = arr.filter( function(el) {
    return el.includes('a')
} ) 

console.log(arr)
console.log(filtered1)