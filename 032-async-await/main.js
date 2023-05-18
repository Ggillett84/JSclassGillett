// function getData(){
//     return new Promise (resolve => {
//         setTimeout(() => {
//             resolve (46)
//         }, 1)
//     })
// }

async function start (){
    const data = await fetch ('https://api.weather.gov/gridpoints/HNX/65,113/forecast')
    const result = await data.json()
    console.log (result.properties.periods[1].shortForecast)
}  


async function start2 (){
    fetch ('https://api.weather.gov/gridpoints/HNX/65,113/forecast')
    .then( data => data.json ())
    .then (result => {
    console.log (result.properties.periods[1].shortForecast)
  })
}  

// async function start (){
//     getData ()
//     .then (result => {
//     console.log (result) 
// })



start ()
start2 ()