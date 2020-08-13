
import {
    createPost,
    containerPost,
} from '../firebase.js';


const inicializar = () => {
    const fichero = document.getElementById('fichero');
    if (fichero) fichero.addEventListener('change', subirImagenAFirebase, false);
};
const subirImagenAFirebase = () => {
    const imagenASubir = fichero.files[0].name;

// const subirImagenAFirebase = () => {
//   alert("subir imagen a firebase");
};

window.onload = inicializar;
let fichero;


const loadHomeFunctions = () => {
    // Función que lleva desde logo segunda pagina a primera página
    const artSpace = document.getElementById('artSpace');
    artSpace.addEventListener('click', () => { window.location.hash = '#/inicio-sesion'; });
};

export const routeHome = () => {
    const viewHomePage = ` 
    <div>
    <header>
    <script src="js/imagenes.js"></script>
        <img class="header-image" src="img/img-cel.png" alt="">
        <div class = "container-second-page">
          <div class = "container_left">
            <img class="header-image-desktop" src="img/img-desk.png" alt="">
            <h1 class = "logo-second-page" id="artSpace" >Art Space</h1>
            <input type="search" id="input_search">
          </div>
          <div class = "icons-General">
            <img class = "icoArt" id= "icoArt"  src="img/articulo_icono.png" alt="">
            <a href="https://calendar.google.com/calendar/r?tab=mc" target="_blank"><img
          src="img/calendario_icono.png" class = "icoCalen"></a>
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
       <div class="container">
       <div class="row">
       <div class="col-sm-8">
       </div>
       <div class="col-sm-4">
         <form id="form-imagenes">
           <label class="btn-file">
              <input type ="file" name="fichero" value="" id="fichero" class="hidden">
              <img src="img/img1.png"  class="img-responsive" alt="descargar">
           </label>
         </form>
       </div>
       </div>
       </div>
       <div class="imagen-post">
         <button class="botones-post" type = "button" id="publicar">Publicar</button>
        </div>
    </form>
    </div>
    <div id="lista-publicaciones"></div>
  </main>
    </div> 
    <footer>
    &copy;2020 by Fabiane, Geraldine & Lady
   <h5>Contactenos: artspacechile@gmail.com</h5>
   </footer>
    `;
    window.location.hash = '#/muro';
    document.getElementById('root').innerHTML = viewHomePage;
    loadHomeFunctions();
    document.getElementById('icoArt').addEventListener('click', () => { window.location.hash = '#/conozca'; });
    document.getElementById('profile').addEventListener('click', () => {
        window.location.hash = '#/perfil';
    });

    containerPost();

    const btnPublicar = document.querySelector('#publicar');
    btnPublicar.addEventListener('click', () => {
        const post = document.querySelector('#post').value;
        createPost(post);
    });
};
