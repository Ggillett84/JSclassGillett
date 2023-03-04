//Update the DOM

const myArr = []

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGCost = (miles, gallons, price = 3.79) => {
   const MPG = Math.round(miles/gallons)
   const tripCost = gallons * price
   updateDOM (`miles per gallon ${MPG} and trip cost is ${tripCost}`)
   myArr.push(MPG, tripCost)
}

trackMPGCost (300, 10, 5.40)
trackMPGCost (320, 12, 5)
updateDOM(myArr)

updateDOM('output to DOM')


//my code using arrays
const myBudget = []

    const budget = (rent, pge, internet, income) => {
    const bills = rent + pge + internet
    const leftOver = income - bills
    myBudget.push (bills, leftOver)
    updateDOM(`Money leftover after bills are paid ${leftOver}`)
}

(budget(1200, 289, 110, 3300))


const kids =['Izaiah', 'Gia', 'Zenith', 'Tyleah']
kids.sort()
updateDOM(`My babies in alphabetical order ${kids}`)



// My mileage function
const trip = (miles, gallon, price, food) => {
    const MPG = (miles/gallon)
    const gasPrice = (MPG * price)
    const totalCost = (gasPrice + food)
    updateDOM (`Total cost of my trip is ${totalCost}`)
}

trip(450, 15, 4.80, 140)

// my DOM changes
const myDOMupdate = (input) => {
    const divEl = document.querySelector('#mine')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

myDOMupdate('These are my changes')