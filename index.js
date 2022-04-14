"use strict";

const header = document.querySelector(".header");
const banner = document.querySelector(".banner");
const btt = document.querySelector(".scroll-btn");

// Sticky navigation: Intersection Observer API
const navHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(banner);

// Scroll btn back to top
const displayBTT = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) btt.classList.add("scroll-btn--show");
  else btt.classList.remove("scroll-btn--show");

  btt.addEventListener("click", function (e) {
    banner.scrollIntoView({ behavior: "smooth" });
  });
};

const bttObserver = new IntersectionObserver(displayBTT, {
  threshold: 0,
});
bttObserver.observe(banner);

// Page navigation
document.querySelector(".header-menu").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("header-menu-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }
});
