export const routeEvents = () => {
    const viewEventsPage = ` 
    <div>
    <header>
        <img class="header-image" src="img/img-cel.png" alt="">
        <div class = "container-second-page">
          <div class = "container_left">
            <img class="header-image-desktop" src="img/img-desk.png" alt="">
            <h1 class = "logo-second-page" id="artSpace2" >Art Space</h1>
            <input type="search" id="input_search" placeholder="Buscar en Art Space">
            <div class = "lupa">
            <img class = "icoLupa" id= "icoLupa"  src="img/buscar_icono.png" alt="">
          </div>
          </div>
          <div class = "icons-General">
            <img class = "icoArt" src="img/articulo_icono.png" alt="">
            <a href="https://calendar.google.com/calendar/r?tab=mc" target="_blank"><img
            src="img/calendario_icono.png" class = "icoCalen"></a>
            <img class = "icoUsu" src="img/usuario_icono.png" alt="" id="profile">
          </div> 
       
    </header>
    <div class= 'article'>
    <section class= 'containerEvent'>
    
    <img src="./img/po4.jpg" class="img-events" alt="pomaire"></a> <br>
    
    <br>
    
    <h1 class='titulos'>Pomaire Greda y Artesania Nacional</h1>
    <h4 class='subtitulos'> Artesania Nacional</h4>
    <br>
   <br>
   <a href=" https://finde.latercera.com/viajes/donde-comer-pasear-y-pasarlo-chancho-en-pomaire-2019/" target="_blank">
   <button class="btnArt" id="registration-btn">Ver Articulo</button></a> 
</section>
<section class= 'containerEvent'>
    
    <img src="./img/lana2.jpg" class="img-events" alt="pomaire"></a> <br>
    
    <br>
    
    <h1 class='titulos'>Cuello de lana gris a Crochet tutorial paso a paso</h1>
    <h4 class='subtitulos'> Tejer </h4>
    <br>
    <br> 
   
   <a href=" https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.creativaatelier.com%2Fcuello-de-lana-gris%2F&psig=AOvVaw0NKmAKYwDhlZQDGuhQX9yz&ust=1597480275105000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCNCm9fyjmusCFQAAAAAdAAAAABAJ" target="_blank">
   <button class="btnArt" id="registration-btn">Ver Articulo</button></a> 
</section>

<section class= 'containerEvent'>
    
    <img src="./img/paint.jpg" class="img-events" alt="pomaire"></a> <br>
    
    <br>
    
    <h1 class='titulos'>10 obras de arte que tienes que ver al menos una vez en tu vida</h1>
    <h4 class='subtitulos'> Pintura</h4>
    <br>
    <br> 
   
   <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.admagazine.com%2Fcultura%2F10-de-las-mejores-obras-de-arte-en-el-mundo-que-tienes-que-ver-20190808-5750-articulos.html&psig=AOvVaw1tDpL74y6MbbQySdq888Mv&ust=1597481683141000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCNCX26GpmusCFQAAAAAdAAAAABAD">
   <button class="btnArt" id="registration-btn">Ver Articulo</button></a> 
</section>

<section class= 'containerEvent'>
    
    <img src="./img/esc1.jpg" class="img-events" alt="pomaire"></a> <br>
    
    <br>
    
    <h1 class='titulos'>Aprender a esculpir el rostro Humano Tutorial</h1>
    <h4 class='subtitulos'> Esculturas</h4>
    <br>
    <br> 
  <button class="btnArt" id="registration-btn">Ver Articulo</button></a> 
</section>
</div>
<footer>
<h5>Contacto: artspacechile@gmail.com</h5>
     &copy;2020 by Fabiane, Geraldine & Lady
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
