// burger handler
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__navigation");
  const menuCloseItem = document.querySelector(".navigation__close");
  const menuLinks = document.querySelectorAll(".navigation__link ");

  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__navigation-active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__navigation-active");
  });

  if (window.innerWidth < 768) {
    for (let i = 0; i <= menuLinks.length; i += 1) {
      menuLinks[i].addEventListener("click", () => {
        menu.classList.remove("header__navigation-active");
      });
    }
  }
})();
