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
        <img class="header-image-desktop2" src="img/geri1.jpg" alt="">
        <div class = "container-second-page">
          <div class = "container_left">
            
            <h1 class = "logo-second-page" id="artSpace2" >Art Space</h1>
            <input type="search" id="input_search" placeholder="Buscar en Art Space" >
            <div class = "lupa">
            <img class = "icoLupa" id= "icoLupa"  src="img/buscar_icono.png" alt="">
          </div>
          </div>
          <div class = "icons-General">
            <img class = "icoArt" id= "icoArt"  src="img/articulo_icono.png" alt="">
            <a href="https://calendar.google.com/calendar/b/4/r?tab=mc" target="_blank"><img
            src="img/calendario_icono.png" class = "icoCalen"></a>
            <img class = "icoUsu" src="img/usuario_icono.png" alt=""id="profile">
          </div> 
       
    </header>
    <main id = "contenedor-perfil" ></main>
    <button class="btn" id= "closeProfile">Cerrar Sesión</button>
    </div>
  
    </div>
    <footer>
    <h5>Contacto: artspacechile@gmail.com</h5>
     &copy;2020 by Fabiane, Geraldine & Lady
    </footer>
    `;
    window.location.hash = '#/perfil';
    document.getElementById('root').innerHTML = viewProfilePage;
    profile();
    loadProfileFunctions();
    document.getElementById('icoArt').addEventListener('click', () => { window.location.hash = '#/conozca'; });
    document.getElementById('closeProfile').addEventListener('click', () => { window.location.hash = '#/inicio-sesion'; });
    
   
}