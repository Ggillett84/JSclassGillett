//Update the DOM

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

updateDOM('output to DOM')

const myDOMupdate = (input) => {
    const divEl = document.querySelector('#mine')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

myDOMupdate('These are my changes')