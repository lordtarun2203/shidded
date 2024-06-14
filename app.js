// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to change the background color
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

// Set interval to change the background color every 0.5 seconds
setInterval(changeBackgroundColor, 500);
