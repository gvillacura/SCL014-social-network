import {
    createPost,
    containerPost,
    profile2,
} from '../firebase.js';


const loadHomeFunctions = () => {
    // Función que lleva desde logo segunda pagina a primera página
    const artSpace = document.getElementById('artSpace');
    artSpace.addEventListener('click', () => { window.location.hash = '#/inicio-sesion'; });
};

export const routeHome = () => {
    const viewHomePage = ` 
    <div class = "wall-container">
    <header class = "header-wall">
        <script src="js/imagenes.js"></script>
        <img class="header-image" src="img/img-cel.png" alt="">
        <img class="header-image-desktop2" src="img/geri1.jpg" alt="">
        <div class="container-second-page">

            <div class="container_left">
                <h1 class="logo-second-page" id="artSpace">Art Space</h1>
            </div>
            <div class="icons-General">
                <img class="icoArt" id="icoArt" src="img/articulo_icono.png" alt="">
                <a href="https://calendar.google.com/calendar/b/4/r?tab=mc" target="_blank">
                    <img src="img/calendario_icono.png" class="icoCalen"></a>
                <img class="icoUsu" src="img/usuario_icono.png" alt="" id='profile'>
            </div>
        </div>
    </header>
    <main>
        <div id="contenedor-perfil2" class="contenedor-perfil2"></div>
        <div id="ingreso-post">
            <form class="formulario-post">
                <div>
                    <textarea type="search" class="textarea" name="post" id="post"
                        placeholder="¡Realiza una publicación!"></textarea>
                        <div class="container">
                        <label for = "file-input">
                            <img src="img/img1.png" id="fichero" class="img-responsive" alt="descargar">
                        </label>
                        <input type="file" name="fichero" id="file-input" class="hidden">
                    </div>
                </div>
                <hr class='hr'>
                <button class="botones-post" type="button" id="publicar">Publicar</button>
            </form>
        <div id="lista-publicaciones"></div>
        </div>
    </main>
    <footer>
        <h5> Contacto: artspacechile@gmail.com</h5>
        &copy;2020 by Fabiane, Geraldine & Lady
    </footer>
</div>
    `;
    window.location.hash = '#/muro';
    document.getElementById('root').innerHTML = viewHomePage;
    loadHomeFunctions();
    profile2();
    document.getElementById('icoArt').addEventListener('click', () => { window.location.hash = '#/conozca'; });

    containerPost();

    const valueFichero = document.querySelector('#file-input');
    const btnPublicar = document.querySelector('#publicar');
    btnPublicar.addEventListener('click', () => {
        const archivoImg = valueFichero.files[0];
        valueFichero.value = null;
        const textPost = document.querySelector('#post').value;
        const post = {
            text: textPost,
            image: archivoImg,
        };
        createPost(post);
    });

    const output = document.querySelector('#fichero');
    valueFichero.addEventListener('change', () => {
        output.src = URL.createObjectURL(valueFichero.files[0]);
    });
};
