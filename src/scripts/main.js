const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function responsiveNav() {
  const navbar = document.getElementById("navbar");

  if (!navbar.classList.contains("responsive")) {
    navbar.classList.add("responsive");
    document.body.style.overflow = "hidden"; // Or whatever fallback you need
  } else {
    navbar.classList.remove("responsive");
    document.body.style.overflow = "visible";
  }
}

function adjustOverflow() {
  if (window.innerWidth > 600) {
    document.body.style.overflow = "visible";
  }
}

// Run on initial load
adjustOverflow();

// Run on resize
window.addEventListener("resize", adjustOverflow);
