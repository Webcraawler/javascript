// const form = document.querySelector('form')

let randomNum = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame)
{
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    // console.log(guess)
    validateGuess(guess)
  });
}

function validateGuess(guess)
{
  //
  if(isNaN(guess))
    alert("please enter a valid number")
  else if(guess<1 || guess>100)
    alert("give input in the range of 1-100")
  else{
    prevGuess.push(guess)
    if(numGuess>=10)
    {
      displayGuess(guess)
      displayMessage(`Game Over. Random Number was ${guess}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
  
}

function checkGuess(guess)
{
  if(guess === randomNum){
    displayMessage("you guessed it right")
    endGame()
  }
  if(guess<randomNum)
  {
    displayMessage("guess is lower than the random number")
  }
  if(guess>randomNum)
  {
    displayMessage("guess is higher than the random number")
  }
}

function displayGuess(guess)
{
  userInput.value = ''
  guessSlot.innerHTML +=  `${guess} `
  remaining.innerHTML = `${10-numGuess} `
  numGuess++
}

function displayMessage(message){
  //
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')//disabled is given in key value pair 
  p.classList.add('button')
  p.innerHTML = '<h2 id ="newGame">Start New Game</h2>'
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click' ,function(e){
    randomNum = parseInt(Math.random()*100+1)
    numGuess = 1
    prevGuess = []
    guessSlot.innerHTML= ''
    remaining.innerHTML = `${10-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true
  })  
  
}