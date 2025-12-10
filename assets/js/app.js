const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Auto-mark current nav link as active based on URL
const navAnchors = document.querySelectorAll(".nav-links a");
if (navAnchors.length) {
  let current = window.location.pathname.split("/").pop();
  if (!current) current = "index.html";

  navAnchors.forEach((a) => {
    let href = a.getAttribute("href");
    // normalize
    href = href.split("/").pop();
    if (!href) href = "index.html";
    if (href === current) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }
  });
}
