import { routeHome} from './templateWall.js';
import { profile } from '../firebase.js';


const loadProfileFunctions = () => {
    // Función que lleva desde logo segunda pagina a primera página
    const artSpace = document.getElementById('artSpace2');
    artSpace.addEventListener('click', routeHome);
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
            <img class = "icoArt" src="img/articulo_icono.png" alt="">
            <img class = "icoCalen" src="img/calendario_icono.png" alt="">
            <img class = "icoUsu" src="img/usuario_icono.png" alt=""id="profile">
          </div> 
        </div>
    </header>
    <main id = "contenedor-perfil" ></main>
  
    </div> `;
    window.location.hash = '#/perfil';
    document.getElementById('root').innerHTML = viewProfilePage;
    profile();
    loadProfileFunctions();
};
