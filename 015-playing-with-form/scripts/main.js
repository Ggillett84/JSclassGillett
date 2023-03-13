const FORM = document.getElementById('form-input')

const MY_MPG = []
const MY_TRIP_COST =[]

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGandCost = (miles, gallons, price = 3.79) => {
   const MPG = Math.round(miles/gallons)
   const tripCost = Math.round (gallons * price)
   updateDOM (`Miles per gallon is ${MPG} and trip cost is ${tripCost}`)
   MY_MPG.push(MPG)
   MY_TRIP_COST.push(tripCost)
}

const calculateAvg = () => {
    let sumMPG = calculateSUM(MY_MPG)
    let sumTripCost = calculateSUM(MY_TRIP_COST)
    let avgMPG = Math.round (sumMPG / MY_MPG.length)
    let avgTripCost = Math.round (sumTripCost /MY_TRIP_COST.length)
    updateDOM (`Average trip cost is ${avgTripCost}`)
    updateDOM (`Average MPG is ${avgMPG}`)
}

FORM.addEventListener('submit', (e) => {
    e.preventDefault ()
    const miles = parseInt (e.target.miles.value)
    const gallons = parseInt (e.target.gallons.value)
    const price = parseInt (e.target.price.value)
    trackMPGandCost(miles, gallons, price)
})

// document.addEventListener('click', (e) =>{
//     e.preventDefault ()
//     e.stopPropagation()
//     console.log (document)
//     alert ("You are clicking outside of the input fields")
// })

miles.addEventListener('click', (e) =>{
    e.preventDefault ()
    e.stopPropagation ()
    console.log (miles)
    alert ("Enter numerical value in this field")
    },
    { once: true} )

gallons.addEventListener('click', (e) =>{
    e.preventDefault ()
    e.stopPropagation ()
    console.log (gallons)
    alert ("Enter numerical value in this field")
},
{ once: true})

price.addEventListener('click', (e) =>{
    e.preventDefault ()
    e.stopPropagation ()
    console.log (price)
    alert ("Enter numerical value in this field")
},
{ once: true})


