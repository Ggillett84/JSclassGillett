import {renderTable} from "../render.js";
import { getTripData, saveTripData } from "../storage.js";
import { trackMPGandCost, updateDOM } from "../calculate.js";
/* Global const for updating DOM elements by their id*/

const FORM = document.getElementById("form-input");
const ERR = document.getElementById("err");
const AVG_OUTPUT = document.getElementById("output-avg");


/* MY_DATA is global array that will be updated by the user input with objects from form input values 
and calculate data */


const MY_DATA = getTripData ()
renderTable (MY_DATA)


/* updateDOM function takes in input (string value) and id (to determine DOM location to update) 
and creates and updates DOM elements*/

function updateDOM(input, id) {
  const divEl = document.querySelector(id);
  const p = document.createElement("p");
  p.textContent = input;
  divEl.appendChild(p);
}



/* isFormValid takes in miles, gallons and price and does simple validation and 
returns boolean or truthy value back to eventlisteners */

function isFormValid(miles, gallons, price) {
  const errMsg = [];
  if (miles === 0 || gallons === 0 || price === 0) {
    errMsg.push("Make sure your input value greater than 0!!, Try Again");
  }
  if (price > 1000) {
    errMsg.push("Really!!!?? I think this is in error...Try again");
  }
  if (errMsg.length > 0) {
    ERR.textContent = errMsg;
    return false;
  } else {
    return true;
  }
}


/* Eventlisteners for form submit button, checks validation and if valid saves input data and calculated 
data as an object into global array named MY_DATA */

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const miles = parseInt(e.target.miles.value);
  const gallons = parseInt(e.target.gallons.value);
  const price = parseInt(e.target.price.value);
  const isValid = isFormValid(miles, gallons, price);
  if (isValid) {
    ERR.textContent = "";
    AVG_OUTPUT.textContent = "";
    const dataObj = trackMPGandCost(miles, gallons, price);
    MY_DATA.push(dataObj);
    saveTripData();
    renderTable(MY_DATA);
    calculateAvg();
  }
  FORM.reset();
});
