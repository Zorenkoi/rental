///////////////////////////////////////////////////////////////////////////
// Toggle navigation menu
const blure = document.querySelector(".blure");
const headerNavigation = document.querySelector(".header-navigation");
const openMenuButton = document.querySelector(".menu-button");
const closeMenuButton = document.querySelector(".header-navigation-close");

blure.addEventListener("click", () => {
  headerNavigation.classList.remove("open");
  blure.classList.remove("visible");
});
openMenuButton.addEventListener("click", () => {
  headerNavigation.classList.toggle("open");
  blure.classList.toggle("visible");
});
closeMenuButton.addEventListener("click", () => {
  headerNavigation.classList.toggle("open");
  blure.classList.toggle("visible");
});

////////////////////////////////////////////////////////////////////////////
// Swiper initialization

const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    2150: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    3000: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnIntersection: false,
  },
  speed: 1000,
  preloadImages: false,
  lazy: true,
});

////////////////////////////////////////////////////////////////////////////
// Show more - show less content

const moreContent = document.querySelector(".more-content");
const toggleButton = document.querySelector(".toggle-content-btn");

toggleButton.addEventListener("click", () => {
  moreContent.classList.toggle("expanded");

  toggleButton.textContent = moreContent.classList.contains("expanded")
    ? "see less-"
    : "see more+";
});
