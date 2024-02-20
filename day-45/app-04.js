const map1 = new Map([
    [1, 'abc'],
    [2, 'pqr'],
    [3, 'xyz'],
    [4, 'lmn'],
    [5, 'abc'],
    [2, 'ppp'],
    [4, 'QQQ']
])

console.log(map1)

map1.forEach((k, v) => console.log('Key ' + k + ' Value '+v))

console.log('value at 2 ' + map1.get(2))

const vals = map1.values()
console.log(vals)


const keys = map1.keys()
console.log(keys)

console.log('Entries Code')
const entries = map1.entries()
while(true) {
    const nxt = entries.next()
    if(nxt.done) break
    console.log(nxt.value)
    console.log('Key ' + nxt.value[0] +' Value ' + nxt.value[1])
}





