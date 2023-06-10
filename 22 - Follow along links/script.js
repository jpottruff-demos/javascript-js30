// Get access to all the elements that need to beh hgilighted
const triggers = document.querySelectorAll("a");

// Create highlight element and append
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink(e) {
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// Event Listeners
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", highlightLink)
);
