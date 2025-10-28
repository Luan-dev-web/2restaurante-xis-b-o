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

    if (menuOverlay.classList.contains('active')) {
      RestoDoSite.style.display = 'none'; // esconde o conteúdo
    } else {
      RestoDoSite.style.display = 'block'; // mostra de volta
    }
  });
});
/*menu*/
const btnXis = document.getElementById('btnXis');
const btnBebidas = document.getElementById('btnBebidas');
const xis = document.getElementById('xis');
const bebidas = document.getElementById('bebidas');

btnXis.addEventListener('click', () => {
  xis.classList.add('ativo');
  bebidas.classList.remove('ativo');
  btnXis.classList.add('ativo');
  btnBebidas.classList.remove('ativo');
});

btnBebidas.addEventListener('click', () => {
  bebidas.classList.add('ativo');
  xis.classList.remove('ativo');
  btnBebidas.classList.add('ativo');
  btnXis.classList.remove('ativo');
});
