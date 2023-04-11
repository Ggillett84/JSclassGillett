const updateDOM = (input, id) => {
    const divEl = document.getElementById(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}
// //my Array with objects inside
// const myArraObjs = [
//     //fist object with two proporties in it
//     {
//         name: "Gloria",
//         hairColor: "brown"
//     },
//     //second object    
//     {
//         name: "Rio",
//         hairColor: "red"
//     },
//     //third object
//     {
//         name: "Jane",
//         hairColor: "black"
//     },

// ]
//for each loop 
// myArraObjs.forEach(obj => {
//     const str = `${obj.name} has ${obj.hairColor} hair color`
//     updateDOM (str, 'output')
// })

const myKidsFav = [
    {
        kid: "Izaiah",
        cartoon: "Dragon Ball Z",
    },
    {
        kid: "Tyleah",
        cartoon: "The Owl House",
    },
    {
        kid: "Zenith",
        cartoon: "Pokemon",
    },

]

myKidsFav.forEach (obj => {
    const str = `${obj.kid} loves to watch ${obj.cartoon} every day!`
    updateDOM (str, 'output')
})