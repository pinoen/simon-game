let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;
let mainMessage = document.querySelector("#level-title");

document.addEventListener("keydown", () => {
  if (!started) {
    mainMessage.textContent = `Level ${level}`;
    nextSequence();
    started = true;
  }
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

function nextSequence() {
  userClickedPattern = [];
  level++;
  mainMessage.textContent = `Level ${level}`;
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  animatePress(randomChosenColour);
  playSound(randomChosenColour);
}

let clickedButton = document.querySelectorAll(".btn");
clickedButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    let userChosenColour = btn.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
  });
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    document.body.classList.add("game-over");
    mainMessage.textContent = "Game Over, Press Any Key to Restart";
    setTimeout(() => {
      document.body.classList.remove("game-over");
    }, 200);
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
