
/* trackMPGandCost function takes in miles, gallons and price and calculates MPG and tripCost and 
returns an object */

function trackMPGandCost(miles, gallons, price) {
    const MPG = Math.round(miles / gallons);
    const tripCost = Math.round(gallons * price);
    updateDOM(
      `Miles per gallon  is ${MPG} and trip cost is ${tripCost}`,
      "#output"
    );
    return {
      miles: miles,
      gallons: gallons,
      price: price,
      MPG: MPG,
      tripCost: tripCost,
    };
  }
  
  /* calculateAvg function loops over the MY_DATA to determine average MPG and Trip Cost
   */
  
  function calculateAvg() {
    const numberOfObj = MY_DATA.length;
    let sumMPG = 0;
    let sumTripCost = 0;
    MY_DATA.forEach((obj) => {
      sumMPG += obj.MPG;
      sumTripCost += obj.tripCost;
    });
    const avgMPG = Math.round(sumMPG / numberOfObj);
    const avgTripCost = Math.round(sumTripCost / numberOfObj);
    updateDOM(`Average MPG is ${avgMPG}`, "#output-avg");
    updateDOM(`Average Trip Cost is ${avgTripCost}`, "#output-avg");
  }
  export {trackMPGandCost, updateDOM}
  