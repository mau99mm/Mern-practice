// traditional
function sayHi(msg) {
    console.log(msg)
}

sayHi('How are you ?')

// anonymous
const sh = function (msg) {
    console.log(msg)
}

sh('Ano -> How are you?')

// es6 introduced => arrow function
const shAr = (msg) => console.log(msg)
shAr('arr -> how are you ?')

const shAr1 = (n1, n2) => {
    console.log(n1)
    console.log(n2)

    return n1 + n2
}

shAr1(12, 78)



