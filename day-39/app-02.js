function nestedWhile() {
    let cnt = 0
    while (++cnt < 10) {
        console.log("👨‍💻 count " + cnt)

        let visited = 10
        while ( visited >= 0 ) {
            console.log(visited--)
        }
    }
}

nestedWhile()