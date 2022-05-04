let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

let randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

let activeButton = document.querySelector(`#${randomChosenColour}`);
activeButton.classList.add("pressed");
setTimeout(() => {
  activeButton.classList.remove("pressed");
}, 300);

let colorSound = new Audio(`sounds/${randomChosenColour}.mp3`);
colorSound.play();
