const myArr = []

// console.log (typeof myObj)
// console.log (typeof myArr)
// console.log(myArr == myObj)
const myNumber = 9
const myObj = {
    name: 'Gloria',
    age: 38,
    hobbies: ['coding', 'gaming', 'working'],
    mobile: {
        make: 'pixel 7',
        OS: 'android'
    },
    myGreeting: function (person) {
        return `what is UP ${person}`
    }
}

const greeting = myObj.myGreeting ('Kelly')
console.log (greeting)