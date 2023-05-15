const formEl = document.getElementById('form')
const output = document.getElementById('output')
const updateDom = (callback)

function type (callback){
     callback(type)
 }
 function reps (callback){
     callback(reps)
 }
 function time (callback){   
     callback(time)
 }
 
 type((updateDom) => {
     reps((updateDom) => {
         time ((updateDom) => {
 
         })
     })
 })

formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    const type = e.target.type.value
    const reps = parseFloat(e.target.reps.value)
    const time = parseFloat(e.target.time.value)
    formEl.reset()
})
