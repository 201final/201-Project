
'use strict'
// builds new player object
function NewPlayer(name) {
  this.name = name;
  this.hand = [];
  this.score = 0;
  this.bet = 0;
  this.bank = 1000;
}
function NewDealer(){
  this.name = 'Dealer';
  this.hand = [];
  this.score = 0;

}

// GLOBAL VARIABLES
var player, dealer;

// MAIN function which xs the game
startGame();

//Bet system
function validateBet(){
  var betValue = document.forms["bettool"]["bet"].value;
  if(betValue < 0) {
    alert("Bet must be greater than 0");
    return false;
  }
  if(betValue % 100 != 0) {
    alert("Bet must be a multiple of 100");
    return false;
  }
  // Once we've passed validation, disable the form and place the bet
  toggleBetForm(true);
  placeBet(betValue);
}
function toggleBetForm(isDisabled){
  document.getElementById("Bet").disabled = isDisabled;
  document.getElementById("placeBetBtn").disabled = isDisabled;
}
function placeBet(bet){
  player.bet = bet;
}
function updateBank(isWin, isBlackjack){
  // Figure out how much was won or lost
  var betMultiplier = 1;
  if(isWin){
    if(isBlackjack){
      betMultiplier = 1.5;
    }
  }
  else {
    // They've lost
    betMultiplier = -1;
  }
  // Adjust the bankroll
  player.bank += player.bet * betMultiplier;
}

function startGame(){
  if (askUserIfWantsToPlay())
  {
    dealer = new NewDealer();
    player =  new NewPlayer(getName());
    displayMsgInScreen('Have fun ' + player.name + ' !!!');
    document.getElementById("bank").innerText = player.bank;
    giveInitialCards();
  }
  else
  {
    // alert('Have a nice day!');
    displayMsgInScreen('Have a nice day!');
  }
}

function resetGame()
{
  dealer.hand = [];
  dealer.score = 0;

  player.hand = [];
  player.score = 0;
  //TODO ask for a bet
  var dealerCardsContainer, playerCardsContainer;
  dealerCardsContainer = document.getElementById('dealerCard');
  playerCardsContainer = document.getElementById('player');
  dealerCardsContainer.innerHTML = null;
  playerCardsContainer.innerHTML = null;
  disableHitStayButtons(false);
  displayMsgInScreen(player.name + ' welcome back');
  // Enable the bet form, show current bank
  toggleBetForm(false);
  document.getElementById("bank").innerText = player.bank;
  giveInitialCards();
}

/*
Gives 2 cards for the player and 1 for the dealer at the beggining of the game.
*/
function giveInitialCards()
{
  pushHand(player);
  pushHand(player);
  check21(player);
  pushHand(dealer);
  // display one dealer's card upside down. 
  var imgParentContainer = document.getElementById('dealerCard');
  var newCardImage = document.createElement('img');
  newCardImage.src = './svg-cards/back.png';
  newCardImage.alt = 'card back';
  newCardImage.id = 'cardBack';
  imgParentContainer.appendChild(newCardImage);
}

/*
Author: Iris
Displays a prompt asking to user if he wants to play.
Returns: boolean.
*/
function askUserIfWantsToPlay()
{
  return( confirm('Hi there! \nDo you want to play BlackJack?'));
}

function getRandomNumber(TopNumber){
  return(Math.floor(Math.random() * TopNumber));
}

function getName(){
  return(prompt('Whats your name?'));
}
/*
Author: Iris
Obtain a random card that hasn't been dealt.
Returns: Card object.
*/
function getCard()
{
  var cardAlreadyDealt = false;
  var attemptedCard
  var i;
  // if card has been found in some hand, get another ramdon card.
  do
  {
    cardAlreadyDealt = false;
    // obtain a random number between 1-51
    attemptedCard = deck[getRandomNumber(52)];
    // review in Dealer.hand if the attempt card is there
    for (i=0; i< NewDealer.hand; i++)
    {
      if ((attemptedCard.value === dealer.hand[i].value) && (attemptedCard.suit === dealer.hand[i].suit))
        {
          cardAlreadyDealt = true;
        }
    }
    // review in NewPlayer.hand if the attemted car is there
    for (i=0; i< NewPlayer.hand; i++)
    {
      if ((attemptedCard.value === player.hand[i].value) && (attemptedCard.suit === player.hand[i].suit))
      {
        cardAlreadyDealt = true;
      }
    }
  }
  while (cardAlreadyDealt === true);
  return(attemptedCard);
}


//validate ace value. Card dealt needs to pass through this before being rendered.
function aceValid(cardDealt, indiv){
  


  if(cardDealt.name === 'Ace'){
    if(indiv.score >= 11){
      cardDealt.value = 1;
    }else{
      cardDealt.value = 11;
    }
  }
  return(cardDealt)
}

// pushes card to ttl and hand arr
function pushHand (playerOrDealer){
  var newCard;
  newCard = getCard();
  newCard = aceValid(newCard, playerOrDealer);
  playerOrDealer.hand.push(newCard);
  playerOrDealer.score =  playerOrDealer.score + newCard.value;

  renderCard(playerOrDealer, newCard);

}


// checks each hand to see if they have 21
function check21(playerOrDealer){
  if(playerOrDealer.score > 21){
    // results(`${playerOrDealer.name} has lost`); // playerOrDealer function needs to be created still with a message parameter
    if(playerOrDealer === dealer){
      // Dealar busted
      updateBank(true, false);
    } if {
      // Player busted
      updateBank(false, false);
    }
  } if(playerOrDealer.score === 21){
    results(`${playerOrDealer.name} just hit 21!`);
    // TODO: Figure out who lost and adjust bank
    if(playerOrDealer === dealer){
      // Dealar hit 21
      updateBank(false, false);
    } else if (
      // Player hit 21 (is a blackjack if they only had 2 cards)
      updateBank(true, player.hand.length === 2)){
    }
    askWantsToPlayAgain();
  } else{
    return(false); 
  } 
}
    displayMsgInScreen(playerOrDealer.name + ' has lost !');
    disableHitStayButtons(true);
  } else if(playerOrDealer.score === 21){
    // results(`${playerOrDealer.name} just hit 21!`);
    displayMsgInScreen(playerOrDealer.name + '  just hit 21!');
    disableHitStayButtons(true);
  } else{
    return(false);
  }
}

// sums up an arrays
function sumArr(arr){
  var i = 0;
  var ttl = 0;
  while (i < arr.length){
    ttl = ttl + arr[i];
    i++;
  }
  return(ttl);
}

// save to local storage function
function saveData(key, data){
  localStorage.setItem(key, JSON.stringify(data));
}
// saves user name to local storage
saveData('name', NewPlayer.name)  //TODO: check if we are going to move this to a function

// render function. elementId has to be a string of playerCard or dealerCard.
function renderCard(playerOrDealer, cardToRender){
  var imgParentContainer;
  if (playerOrDealer.name === 'Dealer')
  {
    imgParentContainer = document.getElementById('dealerCard');
  }
  else
  {
    imgParentContainer = document.getElementById('player');
  }
  var newCardImage = document.createElement('img');
  newCardImage.src = cardToRender.image;
  newCardImage.alt = (cardToRender.value + ' ' + cardToRender.suit);
  imgParentContainer.appendChild(newCardImage);

  // newCardImage = document.createElement('img');
  // newCardImage.src = './svg-cards/back.png';
  // newCardImage.alt = 'card back';
  // imgParentContainer.appendChild(newCardImage);

}


function dealerTurn(){
  // // // // console.log('dealer turn');
  // // // var interval = setInterval(function() {
  // // //   pushHand(dealer);
  // // //   console.log(check21(dealer), dealer.score);
  // // //   if (check21(dealer) !== false) {
  // // //     clearInterval(interval);
  // // //   }
  // // // }, 1000);
  var imgCardBack = document.getElementById('cardBack');
  imgCardBack.parentNode.removeChild(imgCardBack);
  // document.removeChild(imgCardBack);
  do
    pushHand(dealer);
  while (check21(dealer) === false);
}


document.getElementById("buuton").addEventListener("click", hitButton);
document.getElementById("buttonStay").addEventListener("click", stayButton);
document.getElementById("buttonAgain").addEventListener("click", resetGame);


function hitButton(event) {
  pushHand(player);
  check21(player);
}

function disableHitStayButtons(status)
{
  buuton.disabled = status;
  buttonStay.disabled = status;
}

function stayButton() {
  // buuton.disabled = true;
  // buttonStay.disabled = true;
  disableHitStayButtons(true);
  dealerTurn();
}

function results(message) {
  if (dealer.score > player.score === true) {
    return(alert( message))
  }
  else if(dealer.score < player.score === true) {
    return(alert( message))
  }
}

function askWantsToPlayAgain() // TODO delete this
{
  var playAgain = confirm('Would You Like To Play Again?');
  if (playAgain == true) {
    resetGame();
  } else {
      // alert('See you later!');
      displayMsgInScreen('See you later!');
  }
}

function displayMsgInScreen(messageToDisplay)
{
  var msg;
  // alert('in displayMessage');
  msg = document.getElementById('messages');
  msg.textContent = messageToDisplay;
}

