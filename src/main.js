// Este es el punto de entrada de tu aplicacion

/* import {
    myFunction
} from './lib/index.js';
myFunction(); */
const start = document.querySelector('#start_btn');

function secondPage() {
    document.querySelector('#root').innerHTML = ` 
    <h1>Art Space</h1> `;
}

start.addEventListener('click', secondPage);