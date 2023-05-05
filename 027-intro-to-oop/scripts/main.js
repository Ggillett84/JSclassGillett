class Person {
    constructor(firstName, lastName, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }
    showStatus (){
        console.log (` ${this.firstName} lves at ${this.address}`)
    }
}

class Student extends Person{
    constructor (firstName, lastName, address, classList){
    super (firstName, lastName, address)
    this.classList = classList
}
showStatus (){
    console.log (` ${this.firstName} lves at ${this.address}, and is taking ${this.classList}`)
}
}

const gloria = new Student ("gloria", "Gillett", "123 Mountain way", ["Eng 1A", "CIT93"])
gloria.showStatus ()
const kelly = new Person ("kelly", "Gillett", "123 Mountain Way")
kelly.showStatus ()