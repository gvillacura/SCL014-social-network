import { routeLogin } from './templateLogin.js'

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
    <footer > &copy;2020 by Fabiane, Geraldine & Lady</footer>
  
    </div> `;
  window.location.hash = "#/home";
  document.getElementById('root').innerHTML = viewHomePage;
  LoadHomeFunctions();
};

const LoadHomeFunctions = () => {
  // Función que lleva desde logo segunda pagina a primera página
  const artSpace = document.getElementById('artSpace');
  artSpace.addEventListener('click', routeLogin);
};