import { pass, loginGoogle } from "../firebase.js";

const LoadErrorFunctions = () => {
  // Función que lleva desde recuperar contraseña a primera pagina
  const btnLogin = document.querySelector("#loginBtn");
  btnLogin.addEventListener("click", () => {
    window.location.hash = "#/inicio-sesion";
  });

  const enviar = document.querySelector("#start_btn");
  enviar.addEventListener("click", () => {
    pass();
  });

  const googlee = document.querySelector("#google");
  googlee.addEventListener("click", () => {
    loginGoogle();
  });
};

export const routeError = () => {
  const viewErrorPage = `
    <div class= "login-container">
    <header>
    <img class="header-image" src="img/img-cel.png">
    <img class="header-image-desktop" src="./img/apertura1.gif">
</header>
<div class="login">
    <h1>Art Space</h1>
    <h4 class='hsecond'> Ingrese su correo para enviar su nueva contraseña </h4>
    <div id="error-message2" class="recover-password"></div>
    <section class="input_section">
        <section class="input_section2">
          <div>
            <img class="icono" src="img/correo_icono.png" alt="Logo de correo electrónico">
            <input class="input" type="email" placeholder="Correo electrónico" id="input_email_Pass"> <br>
          </div> 
            <button class="btnR" id="start_btn">Enviar</button> <br>
            <button class="btnR" id="loginBtn">Inicio</button>
        </section>

        <section class = "loginSecons">
            <p>Ingresar con</p>
            <div>
                <img src="img/google_logo.png" id="google" class="logo" alt="Logo google">
            </div>
        </section>
    </section>
    <footer class='f2'>
        <h5>Contactenos: artspacechile@gmail.com</h5>
        &copy;2020 by Fabiane, Geraldine & Lady
    </footer>
</div>
</div>
    
      `;
  window.location.hash = "#/recuperar-contrasena";
  document.querySelector("#root").innerHTML = viewErrorPage;
  LoadErrorFunctions();
};
