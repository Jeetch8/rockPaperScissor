const nodeChoices = document.querySelectorAll(".choice");
const userChoiceDisp = document.getElementById("result-user-stat");
const userSelectedImage = document.getElementById("userSelectedImage");
const compSelectedImage = document.getElementById("compSelectedImage");
const winnerDisp = document.getElementById("winnerDisp");
const userScoreDisp = document.getElementById("userScoreVal");
const compScoreDisp = document.getElementById("compScoreVal");

const imageObject = {
  scissors: "./Images/scissors.png",
  paper: "./Images/paper.png",
  rock: "./Images/rock.png",
};

const situations = [
  ["s", "s", null],
  ["s", "r", "r"],
  ["r", "s", "r"],
  ["p", "r", "p"],
  ["r", "p", "p"],
  ["p", "s", "s"],
  ["s", "p", "s"],
  ["p", "p", null],
  ["r", "r", null],
];

let compSelection = "p";
let userSelection = "r";

nodeChoices.forEach((item) => {
  item.addEventListener("click", (e) => {
    userSelection = e.target.getAttribute("alt");
    compSelection =
      nodeChoices[Math.round(Math.random() * 2)].children[0].getAttribute(
        "alt"
      );

    compSelectedImage.setAttribute("src", imageObject[compSelection]);
    userSelectedImage.setAttribute("src", imageObject[userSelection]);
    let solution = situations.find((item) => {
      return item[0] === compSelection[0] && item[1] === userSelection[0];
    });
    if (solution[2] === null) {
      winnerDisp.innerText = "Tie";
    } else {
      let winner = solution.indexOf(solution[2]);
      if (winner === 0) {
        winnerDisp.innerText = "Comp";
        compScoreDisp.innerText = Number(compScoreDisp.innerText) + 1;
      } else {
        winnerDisp.innerText = "User";
        userScoreDisp.innerText = Number(userScoreDisp.innerText) + 1;
      }
    }
    console.log(solution[2]);
  });
});

// console.log(answer);
