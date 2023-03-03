//Update the DOM

const myArr = []

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGCost = (miles, gallons, price = 3.79) => {
   const MPG = miles/gallons
   const tripCost = MPG * price
   myArr.push(MPG, tripCost)
}

updateDOM (trackMPGCost (300, 10, 5.40))
updateDOM (trackMPGCost (320, 12, 5))


updateDOM('output to DOM')


//my code using arrays
const myBudget = []

const budget = (rent, pge, internet, income) => {
const bills = rent + pge + internet
const leftOver = income - bills
myBudget.push (bills, leftOver)
}

updateDOM (budget(1200, 289, 110, 3300))


const kids =['Izaiah', 'Gia', 'Zenith', 'Tyleah']
kids.sort()
console.log(kids)



// My mileage function
const trip = (miles, gallons, price, food) => miles/gallons * price + food

updateDOM (trip (450, 15, 4.80, 140))

// my DOM changes
const myDOMupdate = (input) => {
    const divEl = document.querySelector('#mine')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

myDOMupdate('These are my changes')