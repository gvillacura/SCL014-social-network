export const routeEvents = () => {
    const viewEventsPage = ` 
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
            <a href="https://calendar.google.com/calendar/r?tab=mc" target="_blank"><img
            src="img/calendario_icono.png" class = "icoCalen"></a>
            <img class = "icoUsu" src="img/usuario_icono.png" alt="" id="profile">
          </div> 
       
    </header>

    <section>
    <br>
    <br>
    <h1> Conozca más sobre su artesania favorita</h1>
    <br>
    <br>
<img class="img-events"  src="./img/Pomaire.jpg" alt="pomaire"> <br>
<br>
<br>
  <a href=" https://finde.latercera.com/viajes/donde-comer-pasear-y-pasarlo-chancho-en-pomaire-2019/" target="_blank">Conozca Pomaire y su variedad en greda</a>
</section>
<footer>
     &copy;2020 by Fabiane, Geraldine & Lady
    <h5>Contactenos: artspacechile@gmail.com</h5>
    </footer>
`;
    window.location.hash = '#/conozca';
    document.getElementById('root').innerHTML = viewEventsPage;
    document.getElementById('artSpace2').addEventListener('click', () => {
        window.location.hash = '#/muro';
    })
    document.getElementById('profile').addEventListener('click', () => {
        window.location.hash = '#/perfil';
    });
       
   
};
