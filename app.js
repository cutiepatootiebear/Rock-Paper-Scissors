let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
console.log(getComputerChoice());

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user*".fontsize(3).sub();
  const smallCompWord = "comp*".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} beats ${convertToWord(
    computerChoice
  )}${smallCompWord}\u00A0\u00A0\u00A0\u00A0 You win! 🔥😎`;
  userChoice_div.classList.add("green-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("green-glow"),
    470
  );
  // console.log('userchoice', user)
  // console.log('computer', computer)
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user*".fontsize(3).sub();
  const smallCompWord = "comp*".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} loses to ${convertToWord(
    computerChoice
  )}${smallCompWord} \u00A0\u00A0\u00A0\u00A0 You lost... 🤬`;

  userChoice_div.classList.add("red-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("red-glow"),
    470
  );
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user*".fontsize(3).sub();
  const smallCompWord = "comp*".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} equals ${convertToWord(
    computerChoice
  )}${smallCompWord}\u00A0\u00A0\u00A0\u00A0 It's a draw 🌚🙃`;

  userChoice_div.classList.add("gray-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("gray-glow"),
    400
  );
  console.log("draw");
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      // console.log("user wins");
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      // console.log("user loses");
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      // console.log("ITS A DRAW");
      break;
  }

  // console.log("userChoice", userChoice);
  // console.log("computerChoice", computerChoice);
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  // console.log("clicked on rock");

  paper_div.addEventListener("click", () => game("p"));
  // console.log("clicked on paper_div");

  scissors_div.addEventListener("click", () => game("s"));
  // console.log("clicked on scissors_div");
}

main();
