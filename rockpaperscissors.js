//Function to get user's choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase(); //prevents error from capitalization
  
  //Checks userInput is valid choice
  if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
    return userInput;
  } else if (userInput == 'fire') {
    return userInput; //Friend's Easter Egg
  } else {
    console.log('That\'s not a choice in the game!')
  }
};


//Function to randomly pick Computer's input
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random()*3); //Random number 0-2 

  //Based on the random number, assigns rock, paper, or scissors
  switch (computerChoice) {
    case 0:
    return 'rock';
    break;

    case 1:
    return 'paper';
    break;

    case 2:
    return 'scissors';
    break;

    default:
    console.log('Code Error with getComputerChoice function')
  }
}

//Function to compare user and computer picks. 
function determineWinner(userChoice, computerChoice) {
  //Tied game parameters
  if (userChoice == computerChoice) {
    return 'Both choices were the same! It\'s a tie!'
  } 
  //Friend's easter egg
  if (userChoice == 'fire') {
   return 'Well played! Fire beats everything! Except water balloon, of course.'
  }
  //User picks rock
  if (userChoice == 'rock') {
    if (computerChoice == 'paper') {
      return 'Computer wins! Better luck next time!'
    } else if (computerChoice == 'scissors') {
      return 'Congratulations! You won!'
    }
  }
  //User picks paper
  if (userChoice == 'paper') {
    if (computerChoice == 'scissors') {
      return 'Computer wins! Better luck next time!'
    } else if (computerChoice == 'rock') {
      return 'Congratulations! You won!'
    }
  }
  //User picks scissors
  if (userChoice == 'scissors') {
    if (computerChoice == 'rock') {
      return 'Computer wins! Better luck next time!'
    } else if (computerChoice == 'paper') {
      return 'Congratulations! You won!'
    }
  }
}

//Prints user's and computer's choice to console and winner
function playGame(userInput) {
  let userChoice = getUserChoice(userInput);
  let computerChoice = getComputerChoice()

  //Prints user's choice and computer's choice to the console
  console.log('User\'s Choice: ' + userChoice);
  console.log('Computer\'s Choice: ' + computerChoice);

  //Calls determineWinner function and prints result
  console.log(determineWinner(userChoice, computerChoice));
}

//playGame function takes user's pick as input
playGame('rock');