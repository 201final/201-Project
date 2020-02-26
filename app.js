'use strict'

// builds new player object
function NewPlayer(name) {
  this.name = name;
  this.hand = [];
  this.score = 0;
  this.bet = 0;
}


function NewDealer(){

  this.hand = [];
  this.score = 0;
}

function startGame(){
  var dealer = new NewDealer();
  var player =  new NewPlayer(getName());
   pushHand(player);
   pushHand(player);
   pushHand(player);
   
   
}
startGame();

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
askUserIfWantsToPlay();

function getRandomNumber(TopNumber){
  return(Math.floor(Math.random() * TopNumber));
}

function getName(){
  return(prompt('whats your name?'))
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
  if (totalCardsDealt===52)
    alert('All cards have been dealt');
  else
  {
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
    totalCardsDealt++;
    console.log(attemptedCard)
    return(attemptedCard);
  }
}

var totalCardsDealt = 0 //to know how many cards already have been dealt. TODO: reset to 0 when start game

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
  // aceValid(getCard(), playerOrDealer).push(playerOrDealer.score);


  // // playerOrDealer.hand.push(aceValid(getCard(), playerOrDealer));
  var newCard;
  newCard = aceValid(getCard());
  playerOrDealer.hand.push(newCard);
  playerOrDealer.score =  playerOrDealer.score + newCard.value;
  console.log('WHATS THIS ', playerOrDealer)
  

}

// checks ea hand to see if they have 21
function check21(playerOrDealer){
  if(playerOrDealer.score > 21){
    results(`${playerOrDealer.name} has lost`); // playerOrDealer function needs to be created still with a message parameter
  } else if(playerOrDealer.score === 21){
    results(`${playerOrDealer.name} just hit 21!`);
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
saveData('name', NewPlayer.name)

// render function. elementId has to be a string of playerCard or dealerCard.
function render (elementId, cardImg){

var renderCard = document.createElement('img');

renderCard.src = cardImg.imgPath
renderCard.alt = cardImg.name

document.getElementById(elementId).appendChild(renderCard) 
}

// action for dealers turn
function dealerTurn(){
  while(check21('Dealer') === false){
    render('dealerCard', pushHand())
  }
}


document.getElementById("buttonHit").addEventListener("click", hitButton(event));

document.getElementById("buttonStay").addEventListener("click", stayButton(event));

  
function hitButton() {
  getCard();
  render('playerCard', pushHand())
  check21('player')
}

function stayButton() {
  dealerTurn();
  hitButton.disabled = true;
  standButton.disabled = true;
}

function results(message) {
  if (dealer.score > player.score === true) {
    return(alert( message))
  }
  else if(dealer.score < player.score === true) {
    return(alert( message))
  }
}

var playAgain = confirm('Would You Like To Play Again?');
if (playAgain == true) {
  //start game function
} else {
    alert('Bye Bye!')
}