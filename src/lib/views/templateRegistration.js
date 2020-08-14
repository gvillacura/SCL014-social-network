import {
    inscription,
} from '../firebase.js';

const loadRegistryFunctions = () => {
    const btnLogin = document.querySelector('#loginBtn');
    btnLogin.addEventListener('click', () => {
        window.location.hash = '#/';
    });

    function preinscription() {
        const name = document.getElementById('input_name').value;
        const region = document.getElementById('input_address').value;
        const email = document.getElementById('input_email2').value;
        const password = document.getElementById('input_password2').value;
        const passwordConfirm = document.getElementById('password_confirm').value;
        const showErrorMessage = document.querySelector('#error-message');

        const user = {
            name,
            region,
            email,
            password,
            passwordConfirm,
        };

        if (user.name === '' || user.region === '' || user.email === '' || user.password === ''
      || user.passwordConfirm === '') {
            showErrorMessage.innerHTML = '<p>Debe rellenar todos los campos.</p>';
        }
        if (user.password !== user.passwordConfirm) {
            showErrorMessage.innerHTML = '<p>Las contraseñas no coinciden.</p>';
        } else {
            inscription(user);
        }
    }

    const saveRegistration = document.querySelector('#save-registration-btn');
    saveRegistration.addEventListener('click', preinscription);
};


export const routeRegistry = () => {
    const viewRegistration = ` 
      <div id='login' class='login'>
        <header>
          <img class="header-image" src="img/img-cel.png">
          <img class="header-image-desktop" src="img/img-desk.png">
          <h1>Art Space</h1>
        </header>

        <div id = "error-message" class = "error-format"></div>
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
        <footer>
        <h5>Contacto: artspacechile@gmail.com</h5>
        &copy;2020 by Fabiane, Geraldine & Lady
       </footer>
      </div>`;

    // Función que lleva desde pagina de registrarse a primera pagina
    window.location.hash = '#/registro';
    document.getElementById('root').innerHTML = viewRegistration;
    loadRegistryFunctions();
};
