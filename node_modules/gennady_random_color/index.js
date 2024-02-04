function randomRgbColor() {
  let r = Math.floor(Math.random() * (255 + 1));
  let g = Math.floor(Math.random() * (255 + 1));
  let b = Math.floor(Math.random() * (255 + 1));
  return [r, g, b];
}

function randomHexColor() {
  let [r, g, b] = randomRgbColor();

  let hr = r.toString(16).padStart(2, '0');
  let hg = g.toString(16).padStart(2, '0');
  let hb = b.toString(16).padStart(2, '0');

  return '#' + hr + hg + hb;
}

function changeColor() {
  let hex = randomHexColor();
  document.getElementById('color').value = hex;
  document.getElementById('text').innerHTML = hex;
}

module.exports = { changeColor };
