class Person {
    constructor(firstName, lastName, address){
        this._firstName = firstName;
        this._lastName = lastName;
        this._address = address;
    }
    getFirstName (){
        return `${this._firstName}`
    }
    setFirstName (newFirstName){
        this.firstName = newFirstName
    }
    getLastName (){
        return `${this._lastName}`
    }
    setLastName (newLastName){
        this.lirstName = newLastName
    }
    getAddress (){
        return `${this._address}`
    }
    setAddress (newAddress){
        this.address = newAddress
    }
    showStatus (){
        console.log (` ${this.getFirstName ()} lves at ${this.getAddress()}`)
    }
    
}

class Student extends Person{
    constructor (firstName, lastName, address, classList){
    super (firstName, lastName, address)
    this._classList = classList
}
getClassList (){
    return `${this._classList}`
}
setClassList (newClassList){
    this._classList = newClassList
}

showStatus (){
    console.log (` ${this.getFirstName()} lves at ${this.getAddress()}, and is taking ${this.getClassList()}`)
}
}

const gloria = new Student ("gloria", "Gillett", "123 Mountain way", ["Eng 1A", "CIT93"])
gloria.showStatus ()
const kelly = new Person ("kelly", "Gillett", "123 Mountain Way")
kelly.showStatus ()

