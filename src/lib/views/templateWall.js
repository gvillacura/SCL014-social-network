import { routeLogin } from './templateLogin.js';
import { routeProfile } from './templateProfile.js';
import {
  createPost,
  containerPost,
} from '../firebase.js';

const loadHomeFunctions = () => {
    // Función que lleva desde logo segunda pagina a primera página
    const artSpace = document.getElementById('artSpace');
    artSpace.addEventListener('click', routeLogin);
};



export const routeHome = () => {
    const viewHomePage = ` 
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
            <img class = "icoUsu" src="img/usuario_icono.png" alt=""  id='profile'>
          </div> 
        </div>
    </header>
    <main>
    <div id="ingreso-post">
    <form class="formulario-post">
      <div>
        <textarea class="textarea input" name="post" id="post"
          placeholder="¡Realiza una publicación!"></textarea>
      </div>
      <div class="imagen-post">
        <button class="botones-post btn" type = "button" id="publicar">Publicar</button>
      </div>
    </form>
    </div>
    <div id="lista-publicaciones"></div>
  </main>
    </div> `;
    window.location.hash = '#/muro';
    document.getElementById('root').innerHTML = viewHomePage;
    loadHomeFunctions();
    document.getElementById('profile').addEventListener('click', () => {
        routeProfile();
    });

    containerPost();

    const btnPublicar = document.querySelector('#publicar');
    btnPublicar.addEventListener('click', () => {
        const post = document.querySelector('#post').value;
        createPost(post);
    });
};
