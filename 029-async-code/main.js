// let pizza

// function  orderPizza () {
//     console.log ('Order Pizza')
//     setTimeout (() => {
//     pizza = '🍕'
//     console.log (`${pizza} is ready`)
//  }, 2000)
//     console.log ('Pizza was ordered')
// }
// orderPizza()
// console.log ('Call Qoli')
// console.log (`Eat ${pizza}`)

function orderPizza (callback) {
    setTimeout (()=> {
        const pizza = '🍕'
        callback(pizza)
    },2000)
}

function pizzaReady (pizza) {
    console.log (`Eat the  ${pizza}`)
}
orderPizza (pizzaReady)
console.log('call Qoli') 

window.addEventListener ('click', callback)
function callback (){
    console.log ('Clicked')
}

function thing1 (callback){
   //call the shop
    callback()
}
function thing2 (callback){
   // order the pizza
    callback()
}
function thing3 (callback){
    //eat the pizza
    callback()
}

thing1(() => {
    thing2(() => {
        thing3 (() => {

        })
    })
})