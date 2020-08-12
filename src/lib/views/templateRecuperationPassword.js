import {
    pass,
    loginGoogle,
} from '../firebase.js';

import { routeLogin } from './templateLogin.js';
import { routeHome } from './templateWall.js';

const LoadErrorFunctions = () => {
    // Función que lleva desde recuperar contraseña a primera pagina
    const btnLogin = document.getElementById('loginBtn');
    btnLogin.addEventListener('click', routeLogin);

    const enviar = document.querySelector('#start_btn');
    enviar.addEventListener('click', () => {
        pass(routeLogin);
    });

    const googlee = document.querySelector('#google');
    googlee.addEventListener('click', () => {
        loginGoogle(routeHome);
    });
};

export const routeError = () => {
    const viewErrorPage = `
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
    window.location.hash = '#/recuperar-contrasena';
    document.getElementById('root').innerHTML = viewErrorPage;
    LoadErrorFunctions();
};
