document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById('menuIcon');
    const menuOverlay = document.getElementById('menuOverlay');
    const paragrafoXis = document.getElementById('paragrafoXis');/*Para o Js saber oque é para usar depois(aqui em baixo)*/ 
    const RestoDoSite = document.getElementById('RestoDoSite');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', () => {
      menuOverlay.classList.toggle('active');
      menuIcon.classList.toggle('active');
      paragrafoXis.classList.toggle('active');
      menu.classList.toggle('menu');

      if(menuOverlay.classList.contains('active')){
        RestoDoSite.style.display = 'none'; // esconde o conteúdo
      } else {
        RestoDoSite.style.display = 'block'; // mostra de volta
      }  
    });
  });