function findPairOfSum(n, st, ed) {
    for(let i = st; i <=ed; i++ ) {

        // console.log('🤨 i = ' + i)
        for (let j = (i + 1); j < ed; j++) {
            // console.log('j = ' + j)

            if( (i + j) == n)
                console.log('Got the pair (' + i + ' + ' + j + ') = ' + n)
        }

    }

}

findPairOfSum(7, 1, 10)



