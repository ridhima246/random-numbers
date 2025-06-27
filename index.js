document.getElementById("generateButton").onclick = function() {
  // Generates a random number between 1 and 100
  let randomNum = Math.floor(Math.random() * 100) + 1;
  document.getElementById("randomNumber").textContent = "🎲 Your number is: " + randomNum;
}
