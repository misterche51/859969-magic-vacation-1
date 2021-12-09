export default () => {
  const animateIntroMessage = () => {
    const introMessage = document.querySelector(".intro__message");
    introMessage.classList.add("animated");
  };
  window.addEventListener("load", animateIntroMessage);
};
