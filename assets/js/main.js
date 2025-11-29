const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // بعد 50px من السكروول
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// scroll header

// humburger

const burger = document.getElementById("burgerBtn");
const nav = document.getElementById("navMenu");

burger.onclick = () => {
  nav.classList.toggle("active");
};

// swiper
window.onload = function () {
  var swiper = new Swiper(".hero-swiper", {
    loop: true,
    initialSlide: 2,
    grabCursor: true,
    speed: 1100,
    spaceBetween: 70,
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    
    mousewheel: {
      thresholdDelta: 70,
    },
    effect: "coverflow",
    coverflowEffect: {
      rotate: 30,
      // stretch: 0,
      depth: 20,
      modifier: 1,
      slideShadows: false,
      useTransform: true,
    },
  });
};
// swiper end
//
const swiper = new Swiper(".mySwiper", {
  rtl: false,
  speed: 5000,
  loop: true,
  loopAdditionalSlides: 10,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  // freeMode: true,
  freeModeMomentum: false,
  allowTouchMove: true,
  slidesPerView: "auto",
  spaceBetween: 30,

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

//

// swiper-oppinion


// swiper-oppinion


let intro = gsap.timeline();

intro.fromTo(".animated-line", 2, { drawSVG: "0%" }, { drawSVG: "100%", ease: "Power2.easOut" }).to(".animated-line", { drawSVG: "100% 100%", delay: 0.4 });


// scroll bottom to top button'

const scrollBtn = document.getElementById("scrollTopBtn");

// إظهار الزر عند scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.opacity = "1";
    scrollBtn.style.pointerEvents = "auto";
  } else {
    scrollBtn.style.opacity = "0";
    scrollBtn.style.pointerEvents = "none";
  }
});

// عند الضغط على الزر
scrollBtn.addEventListener("click", () => {
  // smooth scroll للـ top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


// //////////////////////////////////////////////////*css*/`
document.getElementById("settings-btn").addEventListener("click", function () {
  const panel = document.getElementById("settings-panel");
  panel.classList.toggle("active");
});
function changeColor(color) {
  document.body.style.backgroundColor = color;
  localStorage.setItem("siteColor", color);
}

const savedColor = localStorage.getItem("siteColor");
if (savedColor) {
  document.body.style.backgroundColor = savedColor;
}