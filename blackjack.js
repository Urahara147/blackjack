let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let sum = 0

function getRandomCard(param) {
  let randomNumber = Math.floor(Math.random()* 13 ) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  }
  else {
    return randomNumber
  }
}

function startGame(param) {
  isAlive = true
  
let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard, secondCard]  

sum = firstCard + secondCard
  
  renderGame()
}
function renderGame(param) {
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards: " 
  for (var i = 0; i < cards.length; i++) {
  cardsEl.textContent += cards[i] + " "
 }
  if (sum <= 20) {
  
   message = "do you want to draw a new card?"
    
} else if (sum === 21) {
    message = "congratulations you have won!"
    hasBlackJack = true;
    
} else {
   message = "you're out of the game"
    isAlive = false;
    
}
messageEl.textContent = message

}
function newCard(param) {
let card = getRandomCard()
sum += card
cards.push(card)
renderGame()

}
