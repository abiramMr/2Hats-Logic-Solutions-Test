const { animate, inView } = Motion;

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const backdrop = document.getElementById("backdrop");
const icon = document.getElementById("menu-icon");
const headerLine = document.getElementById("header-line");

const spans = icon.querySelectorAll("span");
let isOpen = false;

const easingSmooth = "cubic-bezier(.35,.17,.3,.86)";
const easingSpring = "cubic-bezier(0.25, 1, 0.5, 1)";

const openMenu = () => {
  menu.classList.remove("hidden");
  backdrop.classList.remove("hidden");

  animate(
    menu,
    { transform: "translateX(0)" },
    { duration: 0.4, easing: "ease-out" }
  );
  animate(backdrop, { opacity: [0, 1] }, { duration: 0.4, easing: "ease-out" });
  animate(headerLine, { width: "100%" }, { duration: 0.4, easing: "ease-out" });

  animate(
    spans[0],
    { rotate: 45, y: 6 },
    { duration: 0.3, easing: "ease-in-out" }
  );
  animate(spans[1], { opacity: 0 }, { duration: 0.3, easing: "ease-in-out" });
  animate(
    spans[2],
    { rotate: -45, y: -6 },
    { duration: 0.3, easing: "ease-in-out" }
  );

  isOpen = true;
};

const closeMenu = () => {
  animate(
    menu,
    { transform: "translateX(100%)" },
    { duration: 0.4, easing: "ease-in" }
  );
  animate(
    backdrop,
    { opacity: [1, 0] },
    { duration: 0.4, easing: "ease-in" }
  ).finished.then(() => {
    menu.classList.add("hidden");
    backdrop.classList.add("hidden");
  });

  animate(headerLine, { width: "0" }, { duration: 0.4, easing: "ease-in" });

  animate(
    spans[0],
    { rotate: 0, y: 0 },
    { duration: 0.3, easing: "ease-in-out" }
  );
  animate(spans[1], { opacity: 1 }, { duration: 0.3, easing: "ease-in-out" });
  animate(
    spans[2],
    { rotate: 0, y: 0 },
    { duration: 0.3, easing: "ease-in-out" }
  );

  isOpen = false;
};

menuBtn.addEventListener("click", () => (isOpen ? closeMenu() : openMenu()));

animate([
  [
    ".home-banner img",
    { opacity: [0, 1], scale: [1.1, 1] },
    { duration: 0.6, easing: easingSmooth },
  ],
  [
    ".home-banner-card",
    { opacity: [0, 1], x: [50, 0] },
    { duration: 0.4, easing: easingSmooth },
  ],
  [
    ".home-banner-card h1",
    { opacity: [0, 1], y: [20, 0] },
    { duration: 0.4, at: "+0.2", easing: easingSmooth },
  ],
  [
    ".home-banner-card p",
    { opacity: [0, 1], y: [10, 0] },
    { duration: 0.3, at: "+0.3", easing: easingSmooth },
  ],
  [
    ".home-banner-card button",
    { opacity: [0, 1], scale: [0.8, 1] },
    { duration: 0.3, at: "+0.4", easing: easingSmooth },
  ],
]);

const inViewAnimate = (
  selector,
  keyframes,
  options = {},
  inViewOptions = { margin: "-50px" }
) => {
  inView(
    selector,
    () => {
      animate(selector, keyframes, {
        duration: 0.6,
        easing: easingSpring,
        ...options,
      });
    },
    inViewOptions
  );
};

// --- Product Section ---
inViewAnimate(".home-product h1", { opacity: [0, 1], y: [20, 0] });

inViewAnimate(".home-product h1 span", {
  scaleX: [0, 1],
  opacity: [0, 1],
  transformOrigin: "left",
});

inViewAnimate("#home-product-description", { opacity: [0, 1], y: [50, 0] });

// document.querySelectorAll('.product__grid > div').forEach((card, index) => {
//   inView(card, () => {
//     animate(card, { opacity: [0, 1], y: [30, 0], scale: [0.95, 1] }, { duration: 0.6, delay: index * 0.1, easing: easingSpring });
//   }, { margin: '-50px' });
// });

// --- Project Section ---
inViewAnimate(".home-project h1", { opacity: [0, 1], y: [20, 0] });

inViewAnimate(".home-project h1 span", {
  scaleX: [0, 1],
  opacity: [0, 1],
  transformOrigin: "left",
});

inViewAnimate("#home-project-description", { opacity: [0, 1], y: [50, 0] });

// document.querySelectorAll('.home-project-cards > div').forEach((card, index) => {
//   inView(card, () => {
//     animate(card, { opacity: [0, 1], y: [30, 0], scale: [0.95, 1] }, { duration: 0.6, delay: index * 0.1, easing: easingSpring });
//   }, { margin: '-50px' });
// });

inViewAnimate(
  "#view-all-projects",
  { opacity: [0, 1], y: [30, 0], scale: [0.95, 1] },
  { delay: 0.1 }
);

function animateGridChildren(containerSelector) {
  document
    .querySelectorAll(`${containerSelector} > div`)
    .forEach((card, index) => {
      inView(
        card,
        () => {
          animate(
            card,
            { opacity: [0, 1], y: [30, 0], scale: [0.95, 1] },
            { duration: 0.6, delay: index * 0.1, easing: easingSpring }
          );
        },
        { margin: "-50px" }
      );
    });
}

// Use the helper
animateGridChildren(".product__grid");
animateGridChildren(".home-project-cards");
