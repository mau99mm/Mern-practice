function calc(a, b) {
    if(b == 0) throw new Error(`b can not be zero`)
    return a/b
}

try {
    calc(10, 2)
    console.log(`succes`)
} catch(e) {
    console.log(`Error Ocurred`)
    console.error(e)
} finally {
    console.log(`Finally Executed`)
}


















