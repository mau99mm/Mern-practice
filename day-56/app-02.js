const dt1 = new Date('2020-01-01')

console.log(`
    Current Date : ${dt1}
    10 days After : ${dt1.getDate() + 10}
`)

const dt2 = new Date(dt1.setDate(dt1.getDate() +10))
console.log(dt2)


// calculate the age from given date 

const calcAge = (dt) => new Date() - dt

console.log(calcAge(new Date('2020-01-01')))














