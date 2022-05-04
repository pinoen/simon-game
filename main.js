let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

let randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

animatePress(randomChosenColour);
// let activeButton = document.querySelector(`#${randomChosenColour}`);
// activeButton.classList.add("pressed");
// setTimeout(() => {
//   activeButton.classList.remove("pressed");
// }, 300);

playSound(randomChosenColour);

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
