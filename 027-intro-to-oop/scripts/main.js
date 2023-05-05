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

const gloria = new Person ("gloria", "Gillett", "123 Mountain way")
gloria.showStatus ()
const kelly = new Person ("kelly", "Gillett", "123 Mountain Way")
kelly.showStatus ()