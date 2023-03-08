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
   updateDOM (`miles per gallon ${MPG} and trip cost is ${tripCost}`)
   MY_MPG.push(MPG)
   MY_TRIP_COST.push(tripCost)
}

const calculateAvgMPG = () => {
    let totalMPG = 0    
    for(let i = 0; i < MY_MPG.length; i++) {
        totalMPG = totalMPG + MY_MPG [i]
    }
    let avgMPG = totalMPG / MY_MPG.length
    updateDOM(`Average MPG is ${avgMPG}`)
}

//const calculateAvgCost = () => {
//   let totalTripCost = 0
//    for(let i = 0; i < MY_TRIP_COST.length; i++) {
//       totalTripCost = totalTripCost + MY_TRIP_COST [i]
//    }
//    let avgCost = totalTripCost / MY_TRIP_COST.length
//   updateDOM (`Average trip cost is ${avgCost}`)
//}

const calculateSUM = (arr) => {
    let sum = 0
    for(let i=0; i < arr.length; i++) {
    sum = sum + arr [i]
    }
    return sum
}
const calculateAvg = () => {
    let sumMPG = calculateSUM(MY_MPG)
    let sumTripCost = calculateSUM(MY_TRIP_COST)
    let avgMPG = Math.round (sumMPG / MY_MPG.length)
    let avgTripCost = Math.round (sumTripCost /MY_TRIP_COST.length)
    updateDOM (`Average trip cost is ${avgTripCost}`)
    updateDOM (`Average MPG is ${avgMPG}`)
}

//calculate average cost

trackMPGandCost (360, 15, 5.40)
trackMPGandCost (320, 12, 5)
trackMPGandCost (100, 15, 5.40)
trackMPGandCost (600, 24, 5.70)
trackMPGandCost (50, 2, 3.40)
trackMPGandCost (320, 12, 5)
calculateAvg()
//calculateAvgCost ()
