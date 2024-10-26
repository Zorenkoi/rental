const headerNavigation = document.querySelector(".header-navigation");
const openMenuButton = document.querySelector(".menu-button");
const closeMenuButton = document.querySelector(".header-navigation-close");

openMenuButton.addEventListener("click", () => {
  headerNavigation.classList.toggle("open");
});
closeMenuButton.addEventListener("click", () => {
  headerNavigation.classList.toggle("open");
});

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

const moreContent = document.querySelector(".more-content");
const toggleButton = document.querySelector(".toggle-content-btn");

toggleButton.addEventListener("click", () => {
  moreContent.classList.toggle("expanded");

  toggleButton.textContent = moreContent.classList.contains("expanded")
    ? "see less"
    : "see more";
});

const images = [];

for (let i = 1; i <= 16; i++) {
  const image = `./assets/rooms/room${i}.jpg`;
  images.push(image);
}

const swiperWrapper = document.querySelector(".swiper-wrapper");

images.forEach((src) => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");

  const img = document.createElement("img");
  img.src = src;
  img.alt = "";
  img.loading = "lazy";

  const preloader = document.createElement("div");
  preloader.classList.add(
    "swiper-lazy-preloader",
    "swiper-lazy-preloader-white"
  );

  slide.appendChild(img);
  slide.appendChild(preloader);

  swiperWrapper.appendChild(slide);
});

function togglePopup() {
  alert("lol");
  document.getElementById("popupOverlay").classList.toggle("popup-visible");
}

function validateForm() {
  const checkInDate = document.getElementById("checkInDate").value;
  const checkOutDate = document.getElementById("checkOutDate").value;

  if (new Date(checkOutDate) <= new Date(checkInDate)) {
    alert("Check-out date must be after check-in date.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}
