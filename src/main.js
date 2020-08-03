// Este es el punto de entrada de tu aplicacion

// const { ingreso } = require("./lib");
import {
  ingreso,
  registrar,
 loginG,

} from './lib/index.js';

// Firebase App (the core Firebase SDK) is always required and must be listed first

let btnLogin;
let btnHome = document.querySelector('#home_btn');
let btnRegistration = document.querySelector('#registration-btn');
let mensaje = document.getElementById('errorMensaje');
let artSpace;
let googlee = document.querySelector('#google');

const loginPage = () => {
  document.querySelector('#root').innerHTML = `
   <header>
   <img class="header-image" src="img/img-cel.png">
   <img class="header-image-desktop" src="img/img-desk.png">
   <h1>Art Space</h1>
 </header>

 <section class="input_section">
   <img class="icono" src="img/correo_icono.png" alt="Logo de correo electrónico">
   <input class="input" type="email" placeholder="Correo electrónico" id="input_email"> <br>
   <img class="icono" src="img/contraseña_icono.png" alt="">
   <input class="input" type="password" placeholder="Contraseña" id="input_password" class="input_password">
   <p id="errorMensaje" class="errorMensaje">¿Olvidó su contraseña?</p>
   <button class="btn" id="home_btn">Comenzar</button>
 </section>

 <section>
   <p>Ingresar con</p>
   <div>
     <img src="img/google_logo.png" id="google" class="logo" alt="Logo google">
    
   </div>
   <button class="btn" id="registration-btn">Regístrarse</button>
 </section>
 <footer> &copy;2020 by Fabiane, Geraldine & Lady</footer>
 <script type="module" src="main.js"></script>
 </div>
   `;
  btnHome = document.querySelector('#home_btn');
  // eslint-disable-next-line no-use-before-define
  btnHome.addEventListener('click', homePage);
  btnRegistration = document.querySelector('#registration-btn');
  // eslint-disable-next-line no-use-before-define
  btnRegistration.addEventListener('click', registrationPage);
  mensaje = document.getElementById('errorMensaje');
  // eslint-disable-next-line no-use-before-define
  mensaje.addEventListener('click', errorPage);
};

const errorPage = () => {
  document.querySelector('#root').innerHTML = `
  <header>
      <img class="header-image" src="img/img-cel.png">
      <img class="header-image-desktop" src="img/img-desk.png">
      <h1>Art Space</h1>
    </header>

  <h4> ¡Ingrese un correo válido para enviar su nueva contraseña! </h4>

  <section class="input_section">
  <img class="icono" src="img/correo_icono.png" alt="Logo de correo electrónico">
  <input class="input" type="email" placeholder="Correo electrónico" id="input_email"> <br>
  <button class="btn" id="start_btn">Enviar</button> <br>
  <button class="btn" id="loginBtn">Inicio</button>
  </section>

  <section>
    <p>Ingresar con</p>
    <div>
      <img src="img/google_logo.png" class="logo" alt="Logo google">
     
    </div>
  </section>
  <footer> &copy;2020 by Fabiane, Geraldine & Lady</footer>

  `;
  btnLogin = document.getElementById('loginBtn');
  btnLogin.addEventListener('click', loginPage);
};
mensaje.addEventListener('click', errorPage);

const registrationPage = () => {
  document.querySelector('#root').innerHTML = ` 
  <div id='login' class='login'>
    <header>
      <img class="header-image" src="img/img-cel.png">
      <img class="header-image-desktop" src="img/img-desk.png">
      <h1>Art Space</h1>
    </header>

    <div class="input_section">
      <div>
        <img src="img/usuario_icono.png" class="icono" alt="Icono usuario">
        <input class="input" type="text" placeholder="Nombre" id="input_name"> <br>
      </div>
      <div>
        <img src="img/direccion_icono.png" class="icono" alt="Icono dirección">
        <input class="input" type="text" placeholder="Dirección" id="input_address"> <br>
      </div>
      <div>
        <img class="icono" src="img/correo_icono.png" alt="Logo de correo electrónico">
        <input class="input" type="email" placeholder="Correo electrónico" id="input_email2"> <br>
      </div>
      <div>
        <img class="icono" src="img/contraseña_icono.png" alt="">
        <input class="input" type="password" placeholder="Contraseña" id="input_password2" class="input_password"><br>
      </div>
      <div>
        <img src="img/confirmar_icono.png" class="icono" alt="Icono confirmar"></img>
        <input class="input" type="password" placeholder="Confirmar contraseña" id="password_confirm" class="input_password">
      </div>
    </div>

    <div>
      <button class="btn" id="save-registration-btn">Registrar</button> <br>
      <button class="btn" id="loginBtn">Inicio</button>
    </div>
    <footer> &copy;2020 by Fabiane, Geraldine & Lady</footer>

    <script type="module" src="main.js"></script>
  </div>`;
  btnLogin = document.getElementById('loginBtn');
  btnLogin.addEventListener('click', loginPage);

  const saveRegistration = document.getElementById('save-registration-btn');

  saveRegistration.addEventListener('click', registrar);
};
btnRegistration.addEventListener('click', registrationPage);


export const homePage = () => {
  document.querySelector('#root').innerHTML = ` 
  <div>
  <header>
      <img class="header-image" src="img/img-cel.png" alt="">
      <div class = "container-second-page">
        <div class = "container_left">
          <img class="header-image-desktop" src="img/img-desk.png" alt="">
          <h1 class = "logo-second-page" id="artSpace" >Art Space</h1>
          <input type="search" id="input_search">
        </div>
        <div class = "icons-General">
          <img class = "icoArt" src="img/articulo_icono.png" alt="">
          <img class = "icoCalen" src="img/calendario_icono.png" alt="">
          <img class = "icoUsu" src="img/usuario_icono.png" alt="">
        </div> 
      </div>
  </header>
  <footer > &copy;2020 by Fabiane, Geraldine & Lady</footer>

  </div> `;
  artSpace = document.getElementById('artSpace');
  artSpace.addEventListener('click', loginPage);
};

btnHome.addEventListener('click', () => {
  ingreso(homePage);
}); 

googlee.addEventListener('click', () =>{
  loginG(homePage);
});
