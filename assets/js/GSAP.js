// GSAP Default Config
gsap.defaults({ duration: 1, ease: "power3.out" });

// HERO Section Entrance
gsap.from(".hero h1", { opacity: 0, y: 50 });
gsap.from(".hero p", { opacity: 0, y: 30, delay: 0.3 });
gsap.from(".hero .btn", { opacity: 0, y: 20, delay: 0.5 });

// Hero Icons subtle animation
gsap.from(".hero .icon", {
  opacity: 0,
  scale: 0.8,
  stagger: 0.2,
  delay: 0.5,
});

// SWIPER Section - slide images fade in
gsap.utils.toArray(".swiper-slide img").forEach((img, i) => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 80%",
    },
    opacity: 0,
    // y: 30,
    duration: 1,
    delay: i * 0.1,
  });
});

// ABOUT Section
gsap.from(".about h1", {
  scrollTrigger: {
    trigger: ".about h1",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
});
gsap.from(".about p", {
  scrollTrigger: {
    trigger: ".about p",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  delay: 0.3,
});

// About Flow Phones & Arrows
gsap.utils.toArray(".flow-item").forEach((item) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
    },
    opacity: 0,
    x: item.classList.contains("left-item") ? -100 : 100,
    duration: 1,
  });
});

// CLUB Section
gsap.utils.toArray(".club .img").forEach((img, i) => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: i * 0.1,
  });
});

// Steps Section
gsap.utils.toArray(".steps-row .step-item").forEach((step, i) => {
  gsap.from(step, {
    scrollTrigger: {
      trigger: step,
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: i * 0.15,
  });
});

// DOWNLOAD Section
gsap.from(".download .box .right", {
  scrollTrigger: {
    trigger: ".download .box",
    start: "top 80%",
  },
  opacity: 0,
  x: 100,
});
gsap.from(".download .box .left", {
  scrollTrigger: {
    trigger: ".download .box",
    start: "top 80%",
  },
  opacity: 0,
  x: -100,
  delay: 0.2,
});

// OPINION Section
gsap.utils.toArray(".oppinion .box").forEach((box, i) => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 90%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: i * 0.15,
  });
});

// FOOTER Section
gsap.from(".custom-footer", {
  scrollTrigger: {
    trigger: ".custom-footer",
    start: "top 90%",
  },
  opacity: 0,
  y: 50,
});


