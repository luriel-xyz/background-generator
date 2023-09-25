var body = document.body;
var colorInput1 = document.querySelector(".color1");
var colorInput2 = document.querySelector(".color2");
var gradientHeading = document.querySelector("h3");
var btnGenerator = document.querySelector(".generator-button");

/**
 * Sets the background of the body element to a linear gradient using the values
 * from the color inputs.
 */
function setGradientBackground() {
  // Get the values from the color inputs
  const color1 = colorInput1.value;
  const color2 = colorInput2.value;

  // Create the linear gradient CSS string
  const gradient = `linear-gradient(to right, ${color1}, ${color2})`;

  // Set the background of the body element to the gradient
  body.style.background = gradient;
  // Set the background of the generator button element to the gradient
  btnGenerator.style.background = gradient;

  // Update the text content of the gradient heading
  gradientHeading.textContent = gradient + ";";
}

/**
 * Generates two random numbers and sets them as the values of the color inputs.
 */
function generateRandomColors() {
  // Generate random color values
  var randomColor1 = getRandomColor();
  var randomColor2 = getRandomColor();

  // Set the random colors as the values of the color inputs
  colorInput1.value = randomColor1;
  colorInput2.value = randomColor2;

  // Update the background with the new random colors
  setGradientBackground();
}

/**
 * Generates a random color in hexadecimal format.
 * @returns {string} A random color in hexadecimal format.
 */
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

colorInput1.addEventListener("input", setGradientBackground);
colorInput2.addEventListener("input", setGradientBackground);
btnGenerator.addEventListener("click", generateRandomColors);
