const circles = document.querySelectorAll('.ball');

function generateRandomColor() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;

  return rgb;
}

function setRandomColors() {
  for (let index = 0; index < circles.length; index += 1) {
    console.log(circles[index]);
    circles[index].style.backgroundColor = generateRandomColor();
  }
}

setRandomColors();