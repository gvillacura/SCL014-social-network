// Este es el punto de entrada de tu aplicacion

/* import {
    myFunction
} from './lib/index.js';
myFunction(); */


const mensaje = document.getElementById('errorMensaje');
mensaje.addEventListener('click', () => {
  const errorMensaje = document.querySelector('#root');
  errorMensaje.innerHTML = `
  <header>
      <img class="header-image" src="img/img-cel.png">
      <img class="header-image-desktop" src="img/img-desk.png">
      <h1>Art Space</h1>
    </header>

  <h4> ¡Ingrese un correo valido para enviar su nueva contraseña! </h4>

  <section class="input_section">
  <img class="icono" src="img/correo_icono.png" alt="Logo de correo electrónico">
  <input class="input" type="email" placeholder="Correo electrónico" id="input_email"> <br>
  <button class="btn" id="start_btn">Enviar</button>
  </section>

  <section>
    <p>Ingresar con</p>
    <div>
      <img src="img/google_logo.png" class="logo" alt="Logo google">
      <img src="img/facebook_logo.png" class="logo" alt="Logo facebook">
    </div>
    <button class="btn">Regístrarse</button>
  </section>
  <footer> &copy;2020 by Fabiane Geraldine & Lady</footer>

  `;
});


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
