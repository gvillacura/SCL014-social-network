import {
    createPost,
    containerPost,
} from '../firebase.js';


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
            <a href="https://calendar.google.com/calendar/b/4/r?tab=mc" target="_blank">
            <img src="img/calendario_icono.png" class = "icoCalen"></a>
            <img class = "icoUsu" src="img/usuario_icono.png" alt=""  id='profile'>
          </div> 
        </div>
    </header>
    <main>
    <div id="ingreso-post">
     <form class="formulario-post">
    
    
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
           <div class="prueba">
              <input type="file" name="fichero" value="" id="fichero" class="hidden" >
              <img src="img/img1.png" id="output" class="img-responsive" alt="descargar">
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
    document.getElementById('icoArt').addEventListener('click', () => {
        window.location.hash = '#/conozca';
    });
    document.getElementById('profile').addEventListener('click', () => {
        window.location.hash = '#/perfil';
    });

    containerPost();

    const valueFichero = document.querySelector('#fichero');
    const btnPublicar = document.querySelector('#publicar');
    btnPublicar.addEventListener('click', () => {
        const archivoImg = valueFichero.files[0];
        const textPost = document.querySelector('#post').value;
        const post = {
            text: textPost,
            image: archivoImg,
        };
        createPost(post);
    });

    valueFichero.addEventListener('change', () => {
        const output = document.getElementById('output');
        output.src = URL.createObjectURL(valueFichero.files[0]);
    });
};
