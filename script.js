document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById('menuIcon');
    const menuOverlay = document.getElementById('menuOverlay');
    const paragrafoXis = document.getElementById('paragrafoXis');/*Para o Js saber oque é para usar depois(aqui em baixo)*/ 
    const RestoDoSite = document.getElementById('RestoDoSite');

    menuIcon.addEventListener('click', () => {
      menuOverlay.classList.toggle('active');
      menuIcon.classList.toggle('active');
      paragrafoXis.classList.toggle('active');

      if(menuOverlay.classList.contains('active')){
        RestoDoSite.style.display = 'none'; // esconde o conteúdo
      } else {
        RestoDoSite.style.display = 'block'; // mostra de volta
      }  
    });
  });