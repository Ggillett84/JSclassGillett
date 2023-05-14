class Trip {
  constructor(miles, gallons, price) {
    this.miles = miles;
    this.gallons = gallons;
    this.price = price;
    this.MPG = Number((miles / gallons).toFixed(2));
    this.tripCost = Number((gallons * price).toFixed(2));
  }
}

export { Trip };
