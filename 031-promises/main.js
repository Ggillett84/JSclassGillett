// function getWeather (){
//     return new Promise (function(resolve, reject){
//         setTimeout(()=>{
//             resolve ('Sunny')
//         },100)
//     })
// }

// function getWeatherIcon (weather){
//     return new Promise (function(resolve, reject){
//         setTimeout(()=>{
//             switch(weather){
//                 case 'Sunny': 
//                 resolve ('☀️')
//             break 
//                  case 'Cloudy':
//                  resolve('⛅')  
//             break
//                 case 'Raining':
//                 resolve('🌧️')   
//             default:   
//                 reject ('NO ICON FOUND')
                
//         }
//      },100)
//   })
// }

// function onSuccess (data){
//     console.log(`Success ${data}`)
// }

// function onError (error){
//     console.log(`Error: ${data}`)
// }

// getWeather()
// .then (getWeatherIcon)
// .then(onSuccess, onError)

function fetchData(){
    return new Promise (function (resolve, reject){
        fetch ('https://api.weather.gov/gridpoints/OKX/35,35/forcast')
        .then(response => response.json ())
        .then (data => resolve(data.properties.periods[1].shortForecast))
        
    })
}

function displayData(weather){
    console.log(weather)
}
function onError(err){
    console.log(`ERROR ${err}`)
}

fetchData()
.then(displayData)
.catch (onError)