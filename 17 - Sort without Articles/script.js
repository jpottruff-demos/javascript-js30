const bands = [
  "The Plot in You",
  "There for Tomorrow",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const sortedBands = bands.sort((a, b) =>
  stripArticle(a.toLowerCase()) > stripArticle(b.toLowerCase()) ? 1 : -1
);

function stripArticle(name) {
  // Note the space
  return name.replace(/^(a |an |the )/i, "");
}

document.querySelector("#bands").innerHTML = sortedBands
  .map((band) => `<li>${band}</li>`)
  .join(""); // no commas from array
