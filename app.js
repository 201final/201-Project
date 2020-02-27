'use strict'
// GLOBAL VARIABLES
var player, dealer;

// builds new player object
function NewPlayer(name) {
  this.name = name;
  this.hand = [];
  this.score = 0;
  this.bank = 1000;
  this.bet = 0;
}

//Bet system
function validateBet(event){
  console.log(event);
  var betValue = document.forms["bettool"]["bet"].value;
  if(betValue < 0) {
    alert("Bet must be greater than 0");
    return false;
  }
  if(betValue % 100 != 0) {
    alert("Bet must be a multiple of 100");
    return false;
  } if (player.bank < betValue) {
    alert('You dont have enough cash');
    return false;
  }
  // Once we've passed validation, disable the form and place the bet
  toggleBetForm(true);
  placeBet(betValue);
}

var betButton = document.getElementById('placeBetBtn')
betButton.addEventListener('click', validateBet);

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

//dealer
function NewDealer(){
  this.name = 'Dealer';
  this.hand = [];
  this.score = 0;
}


// MAIN function which xs the game
function startGame(){
  if (askUserIfWantsToPlay()){
    dealer = new NewDealer();
    player =  new NewPlayer(getName());
    document.getElementById("bank").innerText = player.bank;
    // TODO: reset HTML to initial form (without cards or labels).  
    giveInitialCards();
  }
  else {
    alert('Have a nice day!');
  }
}

function resetGame()
{
  dealer.hand = [];
  dealer.score = 0;

  player.hand = [];
  player.score = 0;

  // Enable the bet form, show current bank
  toggleBetForm(false);
  document.getElementById("bank").innerText = player.bank;

  //TODO ask for a bet
  giveInitialCards();
}

/*
Gives 2 cards for the player and 1 for the dealer at the beginning of the game.
*/
function giveInitialCards()
{
  pushHand(player);
  pushHand(player);
  check21(player);
  pushHand(dealer); 
}

/*
Author: Iris
Displays a prompt asking to user if he wants to play.
Returns: boolean.
*/
function askUserIfWantsToPlay()
{
  return( confirm('Hi there! \n Do you want to play BlackJack?'));
  // needs to start game function
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
  var attemptedCard;
  var i;
  // if card has been found in some hand, get another ramdon card.
  do
  {
    cardAlreadyDealt = false;
    // obtain a random number between 1-51
    attemptedCard = deck[getRandomNumber(52)];
    // review in Dealer.hand if the attempt card is there
    for (i=0; i< NewDealer.hand; i++) {
      if ((attemptedCard.value === dealer.hand[i].value) && (attemptedCard.suit === dealer.hand[i].suit));
      {
        cardAlreadyDealt = true;  
      }
    }
    // review in NewPlayer.hand if the attemted car is there
    for (i=0; i< NewPlayer.hand; i++) {
      if ((attemptedCard.value === player.hand[i].value) && (attemptedCard.suit === player.hand[i].suit));
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
    }
    else{
      cardDealt.value = 11;
    }
  }
  return(cardDealt);
}

// pushes card to ttl and hand array
function pushHand (playerOrDealer){
  var newCard;
  newCard = getCard();
  newCard = aceValid(newCard, playerOrDealer);
  playerOrDealer.hand.push(newCard);
  playerOrDealer.score =  playerOrDealer.score + newCard.value;
}

// checks each hand to see if they have 21
function check21(playerOrDealer){
  if(playerOrDealer.score > 21){
    results(`${playerOrDealer.name} has lost`); // playerOrDealer function needs to be created still with a message parameter
    if(playerOrDealer === dealer){
      // Dealar busted
      updateBank(true, false);
    } else {
      // Player busted
      updateBank(false, false);
    }
    askWantsToPlayAgain();
  } else if(playerOrDealer.score === 21){
    results(`${playerOrDealer.name} just hit 21!`);
    // TODO: Figure out who lost and adjust bank
    if(playerOrDealer === dealer){
      // Dealar hit 21
      updateBank(false, false);
    } else {
      // Player hit 21 (is a blackjack if they only had 2 cards)
      updateBank(true, player.hand.length === 2);
    }
    askWantsToPlayAgain();
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


// render function. elementId has to be a string of playerCard or dealerCard.
function render (elementId, cardImg){
  var renderCard = document.createElement('img');
  renderCard.src = cardImg.imgPath;
  renderCard.alt = cardImg.name;
  document.getElementById(elementId).appendChild(renderCard) 
}

//working: iris, i change the check21 parameter from text to dealer object. needs the render function to works
// action for dealers turn
function dealerTurn(){
  console.log('in dealerTurn now');
  // pushHand(player);
  // check21(player);
  // while(check21(dealer) === false){
  //   render('dealerCard', pushHand())
  // }
  //pushHand(dealer); // this is the second "hidden" card of the dealer
do
  pushHand(dealer);
  // check21(player);
while (check21(dealer) === false);
}
 //debugger 
function hitButton(event) {
  pushHand(player);
  check21(player);
    // render('playerCard', pushHand())
}

function stayButton() {
  hitButton.disabled = true;
  // standButton.disabled = true; this does not exist
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

function askWantsToPlayAgain()
{
var playAgain = confirm('Would You Like To Play Again?');
if (playAgain == true) {
  resetGame();
}else {
    alert('See you later!');
  }
}

///// FUNCTIONING CODE GOES HERE==============================================================================

document.getElementById("buttonHit").addEventListener("click", hitButton);
document.getElementById("buttonStay").addEventListener("click", stayButton);
startGame();


saveData('name', NewPlayer.name)
