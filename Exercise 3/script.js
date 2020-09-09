let userChosen
let computerChosen

var result = results()
const displayResult = document.getElementById('result')
const computerChoice = document.getElementById('computer-choice')
const randomNumber = Math.floor(Math.random() *(3))
const userChoice = document.getElementById('user-choice')
const possibleChoices = document.querySelectorAll('.choices')

// get userChosen
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChosen = e.target.id 
  generatedComputerChoice()
  results()
  userChoice.innerHTML = userChosen
  computerChoice.innerHTML = computerChosen
  displayResult.innerHTML = result
}))

// get a random computer choice
function generatedComputerChoice(){
  if (randomNumber === 0 ) {
    return computerChosen = 'rock'
  } else if (randomNumber === 1) {
    return computerChosen = 'paper'
  } else if (randomNumber === 2) {
    return computerChosen = 'scissors'
  }
}

// get Results
function results() {
  if (computerChosen == userChosen) {
    return result = 'There was a tie!'
  } else if (computerChosen === 'rock' && userChosen === 'paper') {
    return result = 'You lost!'
  } else if (computerChosen === 'rock' && userChosen === 'scissors') {
    return result = 'You win!'
  } else if (computerChosen === 'paper' && userChosen === 'rock') {
    return result = 'You win!'
  } else if (computerChosen === 'paper' && userChosen === 'scissors') {
    return result = 'You lost!'
  } else if (computerChosen === 'scissors' && userChosen === 'rock') {
    return result = 'You win!'
  } else if (computerChosen === 'scissors' && userChosen === 'paper') {
    return result = 'You lost!'
  }
}