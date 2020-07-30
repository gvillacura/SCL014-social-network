// Este es el punto de entrada de tu aplicacion

/* import {
    myFunction
} from './lib/index.js';
myFunction(); */

const start = document.querySelector('#start_btn');

function secondPage() {
  document.querySelector('#root').innerHTML = ` 
  <div>
  <header>
      <img class="header-image" src="img/img-cel.png" alt="">
      <div class = "container-second-page">
        <div class = "container_left">
          <img class="header-image-desktop" src="img/img-desk.png" alt="">
          <h1 class = "logo-second-page" >Art Space</h1>
          <input type="search" id="input_search">
        </div>
        <div class = "icons-General">
          <img src="img/articulo_icono.png" alt="">
          <img src="img/calendario_icono.png" alt="">
          <img src="img/usuario_icono.png" alt="">
        </div> 
      </div>
  </header>
  </div> `;
}

start.addEventListener('click', secondPage);