const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4])

const intersection = Array.from(setA).filter(x => setB.has(x))
console.log(intersection)

const union = [...Array.from(setA), ...Array.from(setB)]
console.log(union)

const union2 = new Set([...setA, ...setB])
console.log(union2)





