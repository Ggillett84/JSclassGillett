const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}
//do while help from MDN
let myCodeByFives = ''
let i = 0

do {
  i = i + 5
  myCodeByFives = myCodeByFives + i
} while (i < 100)

console.log ("My do...while codes")
console.log(myCodeByFives)

//while code
let myTruth = 1

while (myTruth < 10) {
  console.log ("This is True")
  console.log (myTruth)
  myTruth = myTruth + 1
}

//another do while loop
let number =1
do{
  console.log (number)
  number = number * 2

}
while (number <= 20)


updateDOM (`This is my "do... while" code ${myCodeByFives}`)
updateDOM (`This is my "while" code ${myTruth}`)