import {
    loginGoogle,
    ingreso,
} from '../firebase.js';

const loadLoginFunctions = () => {
    // Función que lleva desde la pagina de inicio a la segunda
    const btnHome = document.querySelector('#home_btn');
    btnHome.addEventListener('click', () => {
        ingreso();
    });

    // Función que lleva desde la de inicio a la de registro
    const btnRegistration = document.querySelector('#registration-btn');
    btnRegistration.addEventListener('click', () => { window.location.hash = '#/registro'; });

    // Función que lleva desde el texto olvido su contraseña  a  pantalla recuperar tu contraseña
    const mensaje = document.querySelector('#errorMensaje');
    mensaje.addEventListener('click', () => { window.location.hash = '#/recuperar-contrasena'; });

    // Función que lleva desde el login google a la segunda pantalla
    const googlee = document.querySelector('#google');
    googlee.addEventListener('click', () => {
        loginGoogle();
    });
};

export const routeLogin = () => {
    const viewLogin = `
<header>
 <img class="header-image" src="img/img-cel.png">
 <img class="header-image-desktop" src="img/img-desk.png">
 <h1>Art Space</h1>
</header>

<section class="input_section">
<div id = "error-message" class = "error-format"></div>
  <form>
      <img class="icono" src="img/correo_icono.png" alt="Logo de correo electrónico">
      <input class="input" type="email" autocomplete="email" placeholder="Correo electrónico" id="input_email"> <br>
      <img class="icono" src="img/contraseña_icono.png" alt="">
      <input class="input" type="password" autocomplete="current-password" placeholder="Contraseña" id="input_password" class="input_password">
      <p id="errorMensaje" class="errorMensaje">¿Olvidó su contraseña?</p>
      <button class="btn" id="home_btn" type = "button"> Comenzar</button>
  </form>
</section>

<section>
 <p>Ingresa con </p>
 <div>
   <img src="img/google_logo.png" id="google" class="logo" alt="Logo google">
 </div>
<button class="btn" id="registration-btn">Registrarse</button> 
</section>
<footer>
     &copy;2020 by Fabiane, Geraldine & Lady
    <h5>Contactenos: artspacechile@gmail.com</h5>
    </footer>
</div>
 `;
    window.location.hash = '#/inicio-sesion';
    document.getElementById('root').innerHTML = viewLogin;
    loadLoginFunctions();
};
