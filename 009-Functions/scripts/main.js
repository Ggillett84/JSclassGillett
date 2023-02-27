//My functions

function doMath (a, b) {
    let result = a * b
    return result
    //console.log (`This is the result ${a - b}`)
    //console.log (`This is the result ${a + b}`)
    //console.log (`This is the result ${a / b}`)
    //console.log (`This is the result ${a * b}`)
}

doMoreMath = (a, b) => a * b

console.log (doMoreMath (20, 30))




const result = doMath (10, 4)
console.log(`This result was returned from the function ${result}`)



//converted functions
biWeekly = (a, b, c) => a * b * c
console.log("Bi-weekly income")
console.log (biWeekly (20.19, 8, 10))


monthly = (a, b) => a * b
console.log("Monthly Income")
console.log (monthly (1615.2, 2))


mBills = (a, b, c, d, e) => a + b + c + d

console.log("Monthly bills")
console.log (mBills (1200, 100, 110, 280, 120,))