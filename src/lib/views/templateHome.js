import { routeLogin } from './templateLogin.js';
import {
// dbPublicaciones,
// getPosts,
} from '../index.js';

const LoadHomeFunctions = () => {
    // Función que lleva desde logo segunda pagina a primera página
    const artSpace = document.getElementById('artSpace');
    artSpace.addEventListener('click', routeLogin);
};

/* const listadoPublicaciones = () => {
    const resultPost = getPosts();
    resultPost.then((posts) => {
        posts.forEach((post) => {
            const data = post.data();
            const postContainer = document.querySelector('#lista-publicaciones');
            const postPart = document.createElement('div');
            postPart.classList.add('post-actual');
            postPart.innerHTML = ` <p> ${data.publicacion} </p>`;
            postContainer.appendChild(postPart);
        });
    });
}; */

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
            <img class = "icoUsu" src="img/usuario_icono.png" alt="">
          </div> 
        </div>
    </header>
    
    <main>
      <div id="ingreso-post">
      <form class="formulario-post">
        <div>
          <textarea class="textarea" name="post" id="post"
            placeholder="¡Realiza una publicación!"></textarea>
        </div>
        <div class="imagen-post">
          <button class="botones-post" type = "button" id="publicar">Publicar</button>
        </div>
      </form>
      </div>
      <div id="lista-publicaciones"></div>
    </main>
    <footer > &copy;2020 by Fabiane, Geraldine & Lady</footer>
  
    </div> `;
    window.location.hash = '#/home';
    document.getElementById('root').innerHTML = viewHomePage;
    LoadHomeFunctions();
    // listadoPublicaciones();

    /* const btnPublicar = document.querySelector('#publicar');
    btnPublicar.addEventListener('click', () => {
        const post = document.querySelector('#post').value;
        dbPublicaciones(post, listadoPublicaciones);
    }); */
};
