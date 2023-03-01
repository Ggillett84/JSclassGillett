//Update the DOM

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const mileage = (miles, gallons, price = 3.79) => miles/gallons * price


updateDOM (mileage (300, 10, 5.40))

updateDOM('output to DOM')

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