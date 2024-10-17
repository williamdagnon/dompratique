import './style.css'
const div = document.querySelector('div')

console.log({
    parent: div.parentElement,
    avant: div.previousElementSibling,
    apres: div.nextElementSibling
})