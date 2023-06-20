const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    // offset the body to avoid the 'jump' when nav goes to 'fixed' position
    document.body.style.paddingTop = nav.offsetHeight + "px";
    // pop class on the body
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);
