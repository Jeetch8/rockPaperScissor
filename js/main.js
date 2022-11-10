const rockDiv = document.getElementById("r");
const scissorskDiv = document.getElementById("s");
const paperDiv = document.getElementById("p");
const choicesNodeList = document.querySelectorAll(".choice");
const winnerDisp = document.getElementById("result-final-stat");
const choicesArray = [...choicesNodeList];
const situations = [
  { superior: "s", inferior: "p" },
  { inferior: "r", superior: "p" },
  { inferior: "s", superior: "r" },
];

const imageObject = {
  scissors: "../Images/scissors.png",
  paper: "../Images/paper.png",
  rock: "../Images/rock.png",
};

// compArray[Math.round(Math.random() * 2)];

const userDisplay = document.getElementById("result-user-stat");
const compDisplay = document.getElementById("result-comp-stat");

// userDisplay.appendChild(paperDiv.children[0]);

let userSelection = "";
let compSelection = "";

choicesArray.forEach((item) => {
  item.addEventListener("click", (e) => {
    // const newImage = document
    console.log(imageObject[e.target.getAttribute("alt")]);
    compSelection = choicesArray[Math.round(Math.random() * 2)].id;
    // console.log([item.id, compSelection]);
    if (compSelection === userSelection) {
      winnerDisp.innerText = "Tie";
    }
    situations.find((item) => {
      item.inferior === compSelection && item.superior === userSelection;
    });
  });
});

function displyUserSelection() {
  userDisplay.appendChild();
}
