//Variables
let weaponArray = ["Rock", "Paper", "Scissor"];
let playerScore = 0;
let computerScore = 0;

//Functions

function computerPlay() {
    //Math.floor sätter avjämnar till närmsta helvärde, random ger ett värde mellan 0 och 1.
    let computerWeapon =
        weaponArray[Math.floor(Math.random() * weaponArray.length)];

    return computerWeapon;
}

// let playerWeapon = "Rock";
let winner = "";
//Funktion som spelar en runda mot datorn
function gameRound() {
    let computerWeapon = computerPlay();
    let playerWeapon = prompt("Choose you weapon. Rock, Paper or Scissor.");

    if (
        playerWeapon.toLowerCase() === "rock" &&
        computerWeapon.toLowerCase() === "scissor"
    ) {
        console.log("You Win, Rock beats Scissor");
        playerScore++;
        console.log(playerScore);
        return playerScore;
    } else if (
        playerWeapon.toLowerCase() === "rock" &&
        computerWeapon.toLowerCase() === "paper"
    ) {
        console.log("You Lose, Paper beats Rock");
        computerScore++;
        console.log(computerScore);
        return computerScore;
    } else if (
        playerWeapon.toLowerCase() === "scissor" &&
        computerWeapon.toLowerCase() === "rock"
    ) {
        console.log("You Lose, Rock beats Scissor");
        computerScore++;
        console.log(computerScore);
        return computerScore;
    } else if (
        playerWeapon.toLowerCase() === "scissor" &&
        computerWeapon.toLowerCase() === "paper"
    ) {
        console.log("You Win, Scissor beats Paper");
        playerScore++;
        console.log(playerScore);
        return playerScore;
    } else if (
        playerWeapon.toLowerCase() === "paper" &&
        computerWeapon.toLowerCase() === "rock"
    ) {
        console.log("You Win, Paper beats Rock");
        playerScore++;
        console.log(playerScore);
        return playerScore;
    } else if (
        playerWeapon.toLowerCase() === "paper" &&
        computerWeapon.toLowerCase() === "scissor"
    ) {
        console.log("You Lose, Scissor beats Paper");
        computerScore++;
        console.log(computerScore);
        return computerScore;
    } else {
        console.log("Tie");
    }
}

//Gamefunktion, spela 5 rundor.
function game() {
    for (i = 0; i <= 4; i++) {
        gameRound();
    }
    console.log(playerScore, computerScore);
    if (playerScore > computerScore) {
        console.log(
            "You won. You got ",
            playerScore,
            "points against computers ",
            computerScore
        );
    } else if (computerScore > playerScore) {
        console.log(
            "You lost. You got ",
            playerScore,
            "points against computers ",
            computerScore
        );
    } else {
        console.log("It´s a tie... Och vi testar branch och mergar den");
    }
}
game();
