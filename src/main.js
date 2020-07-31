// Este es el punto de entrada de tu aplicacion

/* import {
    myFunction
} from './lib/index.js';
myFunction(); */
const move = (close, open) => {
  document.getElementById(close).style.display = 'none';
  document.getElementById(open).style.display = 'block';
};

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
          <img class = "icoArt" src="img/articulo_icono.png" alt="">
          <img class = "icoCalen" src="img/calendario_icono.png" alt="">
          <img class = "icoUsu" src="img/usuario_icono.png" alt="">
        </div> 
      </div>
  </header>
  </div> `;
}
start.addEventListener('click', secondPage);

const login = document.querySelector('#login-btn');
function loginPage() {
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
        <input class="input" type="email" placeholder="Correo electrónico" id="input_email"> <br>
      </div>
      <div>
        <img class="icono" src="img/contraseña_icono.png" alt="">
        <input class="input" type="password" placeholder="Contraseña" id="input_password" class="input_password"><br>
      </div>
      <div>
        <img src="img/confirmar_icono.png" class="icono" alt="Icono confirmar"></img>
        <input class="input" type="password" placeholder="Confirmar contraseña" id="password_confirm" class="input_password">
      </div>
    </div>

    <div>
      <button class="btn" id="login-btn">Registrar</button> <br>
      <button class="btn" id="inicioBtn">Inicio</button>
    </div>
    <footer> &copy;2020 by Fabiane Geraldine & Lady</footer>

    <script type="module" src="main.js"></script>
  </div>`;

  const btnInicio = document.getElementById('inicioBtn');
  btnInicio.addEventListener('click', () => {
    move('login', 'inicio');
  });

  // const btnInicio = document.getElementById('inicioBtn');
  // btnInicio.addEventListener('click', () => {
  //   document.querySelector('#root').innerHTML = `
  //   <header>
  //   <img class="header-image" src="img/img-cel.png">
  //   <img class="header-image-desktop" src="img/img-desk.png">
  //   <h1>Art Space</h1>
  // </header>

  // <section class="input_section">
  //   <img class="icono" src="img/correo_icono.png" alt="Logo de correo electrónico">
  //   <input class="input" type="email" placeholder="Correo electrónico" id="input_email"> <br>
  //   <img class="icono" src="img/contraseña_icono.png" alt="">
  //   <input class="input" type="password" placeholder="Contraseña" id="input_password" class="input_password">
  //   <p id="errorMensaje" class="errorMensaje">¿Olvidó su contraseña?</p>
  //   <button class="btn" id="start_btn">Comenzar</button>
  // </section>

  // <section>
  //   <p>Ingresar con</p>
  //   <div>
  //     <img src="img/google_logo.png" class="logo" alt="Logo google">
  //     <img src="img/facebook_logo.png" class="logo" alt="Logo facebook">
  //   </div>
  //   <button class="btn" id="login-btn">Regístrarse</button>
  // </section>
  // <footer> &copy;2020 by Fabiane Geraldine & Lady</footer>
  // <script type="module" src="main.js"></script>
  // </div>
  //   `;
  // });
}
login.addEventListener('click', loginPage);
