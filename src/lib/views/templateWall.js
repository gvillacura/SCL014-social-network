
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
            <input  type="search" id="input_search"  placeholder="Buscar en Art Space" >
            <div class = "lupa">
              <img class = "icoLupa" id= "icoLupa"  src="img/buscar_icono.png" alt="">
            </div>
          </div>
          <div class = "icons-General">
            <img class = "icoArt" id= "icoArt"  src="img/articulo_icono.png" alt="">
            <a href="https://calendar.google.com/calendar/r?tab=mc" target="_blank">
            <img src="img/calendario_icono.png" class = "icoCalen"></a>
            <img class = "icoUsu" src="img/usuario_icono.png" alt=""  id='profile'>
          </div> 
        </div>
    </header>
    <main>
    <div id="ingreso-post">
     <form class="formulario-post">
     <img class = "icoperfil" src="img/artista2.png" alt="">
       <div>
        
         <textarea  type="search"class="textarea" name="post" id="post"
           placeholder="¡Realiza una publicación!"></textarea>
        
       </div>

       
       <div class="container">
       <div class="row">
       <div class="col-sm-8">
       </div>
       <div class="col-sm-4">
         <form id="form-imagenes">
           <label class="btn-file"> 
           <div class = "prueba">
              <input type ="file" name="fichero" value="" id="fichero" class="hidden">
              <img src="img/img1.png"  class="img-responsive" alt="descargar">
              </div>
           </label>
         </form>
       </div>
       </div>
       </div>
       <hr class='hr'>
       
         <button class="botones-post" type = "button" id="publicar">Publicar</button>
        
    </form>
    </div>
    
    <div id="lista-publicaciones"></div>
  </main>
    </div> 
    <footer>
    <h5> Contacto: artspacechile@gmail.com</h5>
    &copy;2020 by Fabiane, Geraldine & Lady
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
