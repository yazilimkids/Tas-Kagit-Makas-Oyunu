const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Oyuncu: ${player}`;
    computerText.textContent = `Bilgisayar: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "TAS";
        break;
      case 2:
        computer = "KAGIT";
        break;
      case 3:
        computer = "MAKAS";
        break;
    }
}

function checkWinner(){
    if(player == computer){
      return "Berabere !";
    }
    else if(computer == "TAS"){
      return (player == "KAGIT") ? "Sen Kazandın !" : "Sen Kaybettin !"
    }
    else if(computer == "KAGIT"){
      return (player == "MAKAS") ? "Sen Kazandın !" : "Sen Kaybettin !"
    }
    else if(computer == "MAKAS"){
      return (player == "TAS") ? "Sen Kazandın !" : "Sen Kaybettin !"
    }
}