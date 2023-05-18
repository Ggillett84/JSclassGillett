const formEl = document.getElementById('form')
const output = document.getElementById('output')


function updateDOM(message, el) {
    return new Promise (resolve =>{
    const newEl = document.createElement(el)
    newEl.textContent = message
    output.appendChild(newEl)
    resolve()
    })
}

function startWorkout (type, reps, time, fn) {
    return new Promise (resolve => {
    fn(`Start ${type} Goal reps is ${reps}`, 'p')
    setTimeout(()=> {
        fn(`Stop ${type}`, 'h1')
        resolve()
    }, time * 1000)
}

formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    const type = e.target.type.value
    const reps = parseFloat(e.target.reps.value)
    const time = parseFloat(e.target.time.value)
    startWorkout (type, reps, time, updateDOM)
    formEl.reset()
})
