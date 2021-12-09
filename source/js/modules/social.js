export default () => {
  let id = null;
  let socialBlock = document.querySelector(`.js-social-block`);
  const socialItems = Array.from(socialBlock.querySelectorAll("li"));
  socialBlock.addEventListener(`mouseover`, async function () {
    socialBlock.classList.add(`social-block--active`);
    for (let item of socialItems) {
      clearInterval(id);
      item.classList.add("active");
      await new Promise((resolve) => {
        id = setTimeout(resolve, 100);
      });
    }
  });
  socialBlock.addEventListener(`mouseleave`, function () {
    socialBlock.classList.remove(`social-block--active`);
    socialItems.forEach((item) => item.classList.remove("active"));
    clearInterval(id);
  });
};
