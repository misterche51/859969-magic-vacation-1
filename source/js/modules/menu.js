export default () => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener(`click`, function () {
      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }
    });
    menuLinks[i].addEventListener(`mouseover`, function (e) {
      if (!e.target.classList.contains("active")) {
        e.target.classList.remove("not-hovered");
        e.target.classList.add("hovered");
      }
    });
    menuLinks[i].addEventListener(`mouseout`, function (e) {
      if (!e.target.classList.contains("active")) {
        e.target.classList.remove("hovered");
        e.target.classList.add("not-hovered");
        setTimeout(() => {
          e.target.classList.remove("not-hovered");
        }, 200);
      }
    });
  }
};
