import { profile } from '../firebase.js';

const loadProfileFunctions = () => {
    // Función que lleva desde logo segunda pagina a primera página
    const artSpace = document.getElementById('artSpace2');
    artSpace.addEventListener('click', () => { window.location.hash = '#/muro'; });
};

export const routeProfile = () => {
    const viewProfilePage = ` 
    <div>
    <header>
        <img class="header-image" src="img/img-cel.png" alt="">
        <div class = "container-second-page">
          <div class = "container_left">
            <img class="header-image-desktop" src="img/img-desk.png" alt="">
            <h1 class = "logo-second-page" id="artSpace2" >Art Space</h1>
            <input type="search" id="input_search">
          </div>
          <div class = "icons-General">
            <img class = "icoArt" id= "icoArt"  src="img/articulo_icono.png" alt="">
            <a href="https://calendar.google.com/calendar/r?tab=mc" target="_blank"><img
            src="img/calendario_icono.png" class = "icoCalen"></a>
            <img class = "icoUsu" src="img/usuario_icono.png" alt=""id="profile">
          </div> 
       
    </header>
    <main id = "contenedor-perfil" ></main>
    <button class="btn" id= "closeProfile">Cerrar Sesión</button>
    </div>
  
    </div>
    <footer>
     &copy;2020 by Fabiane, Geraldine & Lady
    <h5>Contactenos: artspacechile@gmail.com</h5>
    </footer>
    `;
    window.location.hash = '#/perfil';
    document.getElementById('root').innerHTML = viewProfilePage;
    profile();
    loadProfileFunctions();
    document.getElementById('icoArt').addEventListener('click', () => { window.location.hash = '#/conozca'; });
    document.getElementById('closeProfile').addEventListener('click', () => { window.location.hash = '#/inicio-sesion'; });
    
   
}