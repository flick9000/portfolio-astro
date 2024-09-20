const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function adjustOverflow() {
  if (window.innerWidth > 600) {
    document.body.style.overflow = "visible";
  }
}

// Run on initial load
adjustOverflow();

// Run on resize
window.addEventListener("resize", adjustOverflow);
