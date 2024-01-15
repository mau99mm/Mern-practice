//Calculate the percentage of given marks

// var marks = 60
// var totalMarks = 100
// var percentage = (marks/totalMarks) * 100

// console.log('You have got '+ percentage)

function calcPercentage(mrk, ttlMrk) {
    var per = (mrk/ttlMrk) * 100;
    return per
}

var res = calcPercentage(43, 60)
console.log('Your percentage is '+ res)


