let firstCard = Math.floor(Math.random() * 12)
let secondCard = Math.floor(Math.random() * 12)
let cards = [firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let sum = firstCard + secondCard

function startGame(param) {
  renderGame()
}
function renderGame(param) {
  sumEl.textContent = "sum: " + sum
 cardsEl.textContent = "cards "

  for (let i = 0; i < cards.length; i++) {
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
let card = Math.floor(Math.random() * 12)
sum += card
cards.push(card)
renderGame()
}