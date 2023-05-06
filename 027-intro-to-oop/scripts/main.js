class Person {
    constructor(firstName, lastName, address){
        this._firstName = firstName;
        this._lastName = lastName;
        this._address = address;
    }

    get firstName (){
        return this._firstName;
    }
    set firstName (newFirstName){
        this.firstName = newFirstName;
    }
    get lastName (){
        return this._lastName;
    }
    set lastName (newLastName){
        this.lastName = newLastName;
    }
    get address (){
        return this._address;
    }
    set address (newAddressName){
        this.address = newAddressName;
    }
}
//     showStatus (){
//         console.log (` ${this.getFirstName ()} lves at ${this.address}`)
//     }
// }

// class Student extends Person{
//     constructor (firstName, lastName, address, classList){
//     super (firstName, lastName, address)
//     this.classList = classList
// }
// showStatus (){
//     console.log (` ${this.firstName} lves at ${this.address}, and is taking ${this.classList}`)
// }
// }

const person = new Person ("gloria", "Gillett", "123 Mountain way", ["Eng 1A", "CIT93"]);
console.log (person.newFirstName)
person.firstName = 'gloria';
const kelly = new Person ("kelly", "Gillett", "123 Mountain Way")


console.log (gloria.getFirstName())