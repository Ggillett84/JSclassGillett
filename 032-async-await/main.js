// function getData(){
//     return new Promise (resolve => {
//         setTimeout(() => {
//             resolve (46)
//         }, 1)
//     })
// }

// async function start (){
//     const data = await fetch ('https://api.weather.gov/gridpoints/HNX/65,113/forecast')
//     const result = await data.json()
//     console.log (result.properties.periods[1].shortForecast)
// }  


// async function start2 (){
//     fetch ('https://api.weather.gov/gridpoints/HNX/65,113/forecast')
//     .then( data => data.json ())
//     .then (result => {
//     console.log (result.properties.periods[1].shortForecast)
//   })
// }  

// async function start (){
//     getData ()
//     .then (result => {
//     console.log (result) 
// })



// start ()
// start2 ()

function getData(){
    return new Promise (function(resolve,reject) {
        setTimeout(() => {
            // resolve ('Here is your DATA!')
            reject ('Something went wrong!')
        }, 1)
    })
}

// function onSuccess(){

// }

// function onFailure(){

// }

async function start(){
    try{
    const result = await getData ()
    // SUCCESS onSuccess()
    // console.log(`Success: ${result}`)
}   catch(error){
    // FAILURE onFailure()
    // console.log(`ERROR: ${error}`)
}
}


// async function start2(){
//     const result = await getData ()
//     // console.log(result)
//     .catch(error => {
//     console.log(`ERROR: ${error}`)
// })
// console.log(result)
// }


start()
// start2()