const imageFolder = [
  "./images/saikoro-illust1.png",
  "./images/saikoro-illust2.png",
  "./images/saikoro-illust3.png",
  "./images/saikoro-illust4.png",
  "./images/saikoro-illust5.png",
  "./images/saikoro-illust6.png",
];

let roundCount = 0;
let firstWins = 0;
let secondWins = 0; 
const CALC_FOR_DICE = 6;
const MAX_ROUND = 3;

const round = document.getElementById("round");
const playerOne = document.getElementById("pOne");
const playerTwo = document.getElementById("pTwo");
const button = document.getElementById("gobutton");

button.addEventListener("click", () => {
  const diceNumOne = Math.floor(Math.random() * CALC_FOR_DICE);
  const diceNumTwo = Math.floor(Math.random() * CALC_FOR_DICE);
  const diceOne = document.getElementById("diceOne")
  const diceTwo = document.getElementById("diceTwo")
  diceOne.src = imageFolder[diceNumOne];
  diceTwo.src = imageFolder[diceNumTwo];

  if(diceNumOne > diceNumTwo){
    roundCount += 1;
    firstWins += 1;
  } else if(diceNumOne < diceNumTwo){
    roundCount += 1;
    secondWins += 1;
  }

  round.innerText = "ラウンド数: " + roundCount + "ラウンド";
  playerOne.innerText = "プレイヤー1: " + firstWins + "ポイント";
  playerTwo.innerText = "プレイヤー2: " + secondWins + "ポイント";

  if(roundCount === MAX_ROUND){
    button.disabled = true;
    const result = document.getElementById("result");
    if (firstWins > secondWins){
      result.innerText = "1の勝ち!";
    } else {
      result.innerText = "2の勝ち!";
    }
    result.style.display = 'block';
  }
});