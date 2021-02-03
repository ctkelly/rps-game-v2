//Initialize player scores
let humanScore = 0;
let computerScore = 0;

//Initialize round number
let roundNumber = 0;

//Assign return of determineWinner to a variable
const COMPUTER = 2;
const HUMAN = 1;
const TIE = 0;

//Assign strings to variables
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

//Event listener for buttons
let buttons = document.querySelectorAll('button');

buttons.forEach((button) => { 
  button.addEventListener('click', playRound); //Event listeners attached to each button, ready to run humanPlay upon click. 
 }); 

//Div to display scoreboard and human/computer choices
const body = document.querySelector('body');
const scoreboard = document.createElement('div');
body.appendChild(scoreboard);
const showChoices = document.createElement('div');
body.appendChild(showChoices);

//Function for computer selection
function computerPlay() {
  let choice = [ROCK, PAPER, SCISSORS];
  let computerChoice = choice[Math.floor(Math.random() * choice.length)];
  return computerChoice;
 }

//Function to compare choices to determine winner   NOTE: can 1) put human and computer at the global level, 2) put human and computer as function arguments, 3) define human and computer INSIDE of determineWinner
function determineWinner(human, computer) {
  if ((human == ROCK && computer == PAPER)
    || (human == PAPER && computer == SCISSORS)
    || (human == SCISSORS && computer == ROCK)) {
     console.log(`Computer`); 
     return COMPUTER;
  } else if ((human == PAPER && computer == ROCK)
    || (human == SCISSORS && computer == PAPER)
    || (human == ROCK && computer == SCISSORS)) {
     console.log(`Human`); 
     return HUMAN;
  } else {
      console.log(`Tie`); 
      return TIE;
  }
}

//Function to add a point to the winner's score
function incrementScore() {
  if (winner == COMPUTER) {
    computerScore++;
    return computerScore;
  } else if (winner == HUMAN) {
    humanScore++;
    return humanScore;
  }
} 

//Function to declare the match winner (first player to get to 5 pts)
function alertWinner() {
  const winnerAlert = document.createElement('div');
  body.appendChild(winnerAlert);
  if (humanScore == 5) {
    winnerAlert.textContent = 'HUMAN wins!';
  } else if (computerScore == 5) {
    winnerAlert.textContent = 'COMPUTER wins!';
  }
}

//Combine all functions into playRound(), which is called by the click event
function playRound(event) {
  console.log(event);
  let button = event.target;

  let human = button.id;
  console.log(`Human chose: ${human}`);

  let computer = computerPlay();  
  console.log(`Computer chose: ${computer}`);

  function incrementScore() {
    let winner = determineWinner(human, computer); //determineWinner is called when incrementScore is called, because declared as variable "winner"

    if (winner == COMPUTER) {
      computerScore++;
      return computerScore;
    } else if (winner == HUMAN) {
      humanScore++;
      return humanScore;
    }
  } 
  incrementScore();
  roundNumber++;
  showChoices.textContent = `human chose: ${human}, computer chose: ${computer}`;
  scoreboard.textContent = `round: ${roundNumber}, human: ${humanScore}, computer: ${computerScore}`;
  alertWinner();  
} 




