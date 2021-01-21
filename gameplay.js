
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

//EXP 1 Announcement for 5 point winner
/*let humanWins = 'Human wins!';
let computerWins = 'Computer wins!';*/

//Event listener for buttons
let buttons = document.querySelectorAll('button');

buttons.forEach((button) => { 
  button.addEventListener('click', playRound); //Event listeners attached to each button, ready to run humanPlay upon click. 
 }); 

//Div to display scoreboard
const body = document.querySelector('body');
const scoreboard = document.createElement('div');
body.appendChild(scoreboard);

//EXP 1 Div to display 5 point winner  THIS WORKS, BUT ANNOYINGLY SAYS "UNDEFINED" ON THE PAGE UNTIL POINTS GET TO 5
/*const winnerAlert = document.createElement('div');
body.appendChild(winnerAlert);*/


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

//EXP 1 Alert a win when either human or computer reaches 5 points
/*function alertWinner() {
  if (humanScore == 5) {
    console.log(`Human wins!`);
    return humanWins;
  } else if (computerScore == 5) {
    console.log(`Computer wins!`);
    return computerWins;

  }
}*/

//EXP 2 TO GET RID OF "UNDEFINED" ON THE PAGE.  IT WORKS!
function alertWinner() {
  const winnerAlert = document.createElement('div');
  body.appendChild(winnerAlert);
  if (humanScore == 5) {
    winnerAlert.textContent = 'Human wins!';
  } else if (computerScore == 5) {
    winnerAlert.textContent = 'Computer wins!';
  }
}

//Reset all scoreboard info to 0 after either human or computer reaches 5 points



//Combine all functions into playRound(), which is called by the click event.  IT WORKS.
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
  scoreboard.textContent = `Round: ${roundNumber}, Human: ${humanScore} , Computer: ${computerScore}`; 
  /*EXP 1 winnerAlert.textContent = `${alertWinner()}`;*/
  alertWinner();  //EXP 2. IT WORKS!

} 



//NOTES TO SELF:

//The below doesn't work because determineWinner() is not a direct substitution for the innards of determineWinner()
/*function playRound() {

  let human = humanPlay(); //OK
  console.log(`Human chose: ${human}`);

  let computer = computerPlay();  //OK
  console.log(`Computer chose: ${computer}`);

    determineWinner(); //DOESN'T WORK.  Only works if using parameters.
  
}*/

//Function for human selection, using an event listener
/*function humanPlay(event) {
   console.log(event); // Because I have attached an event listener for humanPlay, the function is waiting for the event to call it.
   let button = event.target;
   let humanSelection = button.id; // Does this work now? YES
   console.log(humanSelection);
 }*/

 // Function to declare game winner  
 /*function declareWinner(winner) {  // Input of winner connects the return from determineWinner to declareWinner.
   if (winner == COMPUTER) {  //Say what winner to look for in connection with determineWinner.
     alert ('Computer wins!');
   } else if (winner == HUMAN) {
     alert ('Human wins!');
   } else {
     alert ('Tie!');
   }
 }*/ 

//Function to play a round, using all the single functions.  IT WORKS.
/*function playRound() {

  let human = humanPlay(); 
  console.log(`Human chose: ${human}`);

  let computer = computerPlay(); 
  console.log(`Computer chose: ${computer}`);

  function determineWinner() {
  
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
  //determineWinner();

  function incrementScore() {
    let winner = determineWinner();

    if (winner == COMPUTER) {
      computerScore++;
      return computerScore;
    } else if (winner == HUMAN) {
      humanScore++;
      return humanScore;
    }
  } 
  incrementScore();
  console.log(`Human: ${humanScore}, Computer ${computerScore}`);
  
} 
playRound();*/







