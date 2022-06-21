const rockPaperScissors = ["rock","paper","scissors"];
let humanChoice = "";
let computerChoice = "";
let human = 0;
let tie = 0;
let computer = 0;

function computerPlay(){
    let numArray = Math.floor(Math.random() * 3);
    return rockPaperScissors[numArray];
}

function gameRound(){
    humanChoice = prompt("Choose: Rock, Paper or Scissors?").toLowerCase();
    computerChoice = computerPlay();
    if (humanChoice == computerChoice){
        return tie += 1
    } else if ((humanChoice == "rock" && computerChoice == "paper") || 
               (humanChoice == "paper" && computerChoice == "scissors") ||
               (humanChoice == "scissors" && computerChoice == "rock")){
        return computer += 1
    } else {
        return human += 1
    }
}

function game(){
    let turns = 5
    for (i=0 ; i < turns ; i++){
        gameRound();
        console.log(`computer: ${computerChoice}`);
        console.log(`human: ${humanChoice}`);
        console.log((`Human score: ${human} - Computer score: ${computer}`));
    }
    if (human > computer) {
        console.log("Human wins");
    } else if (human < computer){
        console.log("Computer wins");
    } else {
        console.log("It's a tie"); 
    }
}

game();


