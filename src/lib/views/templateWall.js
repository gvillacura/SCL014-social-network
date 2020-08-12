import { routeLogin } from './templateLogin.js';
import { routeProfile } from './templateProfile.js';
import {
    dbPublicaciones,
    getPosts,
} from '../firebase.js';

const loadHomeFunctions = () => {
    // Función que lleva desde logo segunda pagina a primera página
    const artSpace = document.getElementById('artSpace');
    artSpace.addEventListener('click', routeLogin);
};

const listadoPublicaciones = () => {
    const resultPost = getPosts();
    resultPost.then((posts) => {
        const postContainer = document.querySelector('#lista-publicaciones');
        postContainer.innerHTML = '';
        posts.forEach((post) => {
            const data = post.data();
            const postPart = document.createElement('div');
            postPart.classList.add('post-actual');
            postPart.innerHTML = `  
            <img class = "icoperfil2" src="img/artista2.png" alt="">
            <p class= "post2"> ${data.publicacion} </p>
            <div class = icoReacall>
            <img class = "icoReac" src="img/reac1.png" alt="">
            <img class = "icoReac" src="img/reac3.png" alt="">
            <img class = "icoReac" src="img/reac4.png" alt="">
            <img class = "icoReac" src="img/reac5.png" alt="">
            <img class = "icoReac" src="img/reac6.png" alt="">
            </div>
            `;

            postContainer.appendChild(postPart);
        });
    });
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
       <img class = "icoperfil" src="img/artista2.png" alt="">
        <textarea class="textarea" name="post" id="post"
          placeholder="¡Realiza una publicación!"></textarea>
        
       </div>
       <hr class='hr'>
       <img class = "icoLoadimg" src="img/img1.png" alt="">
       <div class="imagen-post">
         <button class="botones-post" type = "button" id="publicar">Publicar</button>
        </div>
    </form>
    </div>
    <div id="lista-publicaciones"></div>
  </main>
    </div> `;
    window.location.hash = '#/home';
    document.getElementById('root').innerHTML = viewHomePage;
    loadHomeFunctions();
    document.getElementById('profile').addEventListener('click', () => {
        routeProfile();
    });

    listadoPublicaciones();

    const btnPublicar = document.querySelector('#publicar');
    btnPublicar.addEventListener('click', () => {
        const post = document.querySelector('#post').value;
        dbPublicaciones(post, listadoPublicaciones);
    });
};
