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
        
        return `${this.name} who loves ${this.hobbies[1]} says what is UP ${person}`
    }
}

const greeting = myObj.myGreeting ('Kelly')
console.log (greeting)

const myFam = {
    me: 'Gloria',
    likes: 0,
    husband: 'Kelly',
    kids: ['Izaiah', 'Gia', 'Tyleah', 'Zenith'],
    myOther: function (him) {
        return `${this.me} is married to, and loves ${him}. We have 4 kids; ${this.kids}. 
        Our oldest is ${this.kids[0]} at 23 years old, and our youngest is ${this.kids[3]}
        at 3 years old}. Our crazy teen ${this.kids[2]} is musically inclined (she made me put this in).`
    },
    increaseLikes: function (){
        this.likes += 1
    }
}

const gloObj = myFam
gloObj.increaseLikes ()
console.log(gloObj)


const intro = myFam.myOther ('Kelly')
console.log (intro)

for (key in myFam) {
    console.log(`key ${key} and value ${myFam[key]}`)
}