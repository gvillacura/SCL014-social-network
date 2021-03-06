/* eslint-disable no-use-before-define */
// Funciones importadas funcionalidad firebase
import {
    ingreso,
    loginG,
    pass,
    inscription,

} from './lib/index.js';
// Enlaces
let btnLogin;
let btnHome = document.querySelector('#home_btn');
let btnRegistration = document.querySelector('#registration-btn');
let mensaje = document.querySelector('#errorMensaje');
let artSpace;
let googlee = document.querySelector('#google');
let enviar = document.querySelector('#start_btn');
let saveRegistration;

// Página de inicio
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
   <p>Ingresa con </p>
   <div>
     <img src="img/google_logo.png" id="google" class="logo" alt="Logo google">
    
   </div>
   <button class="btn" id="registration-btn">Registrarse</button>
 </section>
 <footer> &copy;2020 by Fabiane, Geraldine & Lady</footer>
 <script type="module" src="main.js"></script>
 </div>
   `;
    // Función que lleva desde la pagina de inicio a la segunda
    btnHome = document.querySelector('#home_btn');
    // eslint-disable-next-line no-use-before-define
    btnHome.addEventListener('click', () => {
        ingreso(homePage);
    });
    // Función que lleva desde la de inicio a la de registro
    btnRegistration = document.querySelector('#registration-btn');
    // eslint-disable-next-line no-use-before-define
    btnRegistration.addEventListener('click', registrationPage);
    // Función que lleva a recuperar tu contraseña
    mensaje = document.querySelector('#errorMensaje');
    // eslint-disable-next-line no-use-before-define
    mensaje.addEventListener('click', errorPage);
    // Función que lleva desde el login google a la segunda pantalla
    googlee = document.querySelector('#google');
    googlee.addEventListener('click', () => {
        loginG(homePage);
    });
};
// Página olvidó su contraseña
const errorPage = () => {
    document.querySelector('#root').innerHTML = `
  <header>
      <img class="header-image" src="img/img-cel.png">
      <img class="header-image-desktop" src="img/img-desk.png">
      <h1>Art Space</h1>
    </header>

  <h4> Ingrese su correo para enviar su nueva contraseña </h4>

  <section class="input_section">
  <img class="icono" src="img/correo_icono.png" alt="Logo de correo electrónico">
  <input class="input" type="email" placeholder="Correo electrónico" id="input_email_Pass"> <br>
  <button class="btn" id="start_btn">Enviar</button> <br>
  <button class="btn" id="loginBtn">Inicio</button>
  </section>

  <section>
    <p>Ingresar con</p>
    <div>
      <img src="img/google_logo.png" id = "google" class="logo" alt="Logo google">
     
    </div>
  </section>
  <footer> &copy;2020 by Fabiane, Geraldine & Lady</footer>

  `;
    // Función que lleva desde recuperar contraseña a primera pagina
    btnLogin = document.getElementById('loginBtn');
    btnLogin.addEventListener('click', loginPage);
    enviar = document.querySelector('#start_btn');
    enviar.addEventListener('click', () => {
        pass(loginPage);
    });
    googlee = document.querySelector('#google');
    googlee.addEventListener('click', () => {
        loginG(homePage);
        // eslint-disable-next-line eol-last
    });
};
// Página para registrarse

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
        <input class="input" type="text" placeholder="Región" id="input_address"> <br>
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
    // Función que lleva desde pagina de registrarse a primera pagina
    btnLogin = document.querySelector('#loginBtn');
    btnLogin.addEventListener('click', loginPage);


    saveRegistration = document.querySelector('#save-registration-btn');
    saveRegistration.addEventListener('click', preinscription);

    function preinscription() {
        const name = document.getElementById('input_name').value;
        const region = document.getElementById('input_address').value;
        const email = document.getElementById('input_email2').value;
        const password = document.getElementById('input_password2').value;
        const passwordConfirm = document.getElementById('password_confirm').value;

        const user = {
            name,
            region,
            email,
            password,
            passwordConfirm,
        };

        if (user.name === '' || user.region === "" || user.email === "" || user.password === ""
            || user.passwordConfirm === "") {
            alert('Debe rellenar todos los campos');
        } else {
            inscription(homePage, user);
        }
    }
};
btnRegistration.addEventListener('click', registrationPage);

// Segunda Página
const homePage = () => {
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
    // Función que lleva desde logo segunda pagina a primera página
    artSpace = document.getElementById('artSpace');
    artSpace.addEventListener('click', loginPage);
};
// Conexion a firebase index.js
btnHome.addEventListener('click', () => {
    ingreso(homePage);
});

googlee.addEventListener('click', () => {
    loginG(homePage);
    // eslint-disable-next-line eol-last
});

/**
 * Listener para recuperacion de contrasena
 */
mensaje.addEventListener('click', errorPage);
