export const menu = () => {
  window.addEventListener('load', function () {
    const buttonMenu = document.getElementById('#button-menu');
    const menu = document.getElementById('#menu');


    buttonMenu.addEventListener('click', () => {
      menu.classList.toggle('active');
    })
  })
}
