let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  animatePress(randomChosenColour);
  playSound(randomChosenColour);
}
nextSequence();

let clickedButton = document.querySelectorAll(".btn");
clickedButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    let userChosenColour = btn.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
  });
});

function playSound(name) {
  let colorSound = new Audio(`sounds/${name}.mp3`);
  colorSound.play();
}

function animatePress(currentColor) {
  let activeButton = document.querySelector(`#${currentColor}`);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 150);
}
