const myMPG = []
const myTripCost =[]

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGCost = (miles, gallons, price = 3.79) => {
   const MPG = Math.round(miles/gallons)
   const tripCost = Math.round (gallons * price)
   updateDOM (`miles per gallon ${MPG} and trip cost is ${tripCost}`)
   myMPG.push(MPG)
   myTripCost.push(tripCost)
}

const calculateAvgMPG = () => {
    //const avgMPG = (myArr[0] + myArr[2]) /2
    //updateDOM(`Averager Miles per gallon is ${avgMPG}`)
    for(let i = 0; i < 10; i++){
        let totalMPG = 0    
        totalMPG = totalMPG + myMPG (i)
    }
}

//calculate average we need to drtermine total occutances and divide that number of occurrances

trackMPGCost (360, 15, 5.40)
trackMPGCost (320, 12, 5)
trackMPGCost (100, 15, 5.40)
trackMPGCost (600, 24, 5.70)
trackMPGCost (50, 2, 3.40)
trackMPGCost (320, 12, 5)
calculateAvgMPG()
