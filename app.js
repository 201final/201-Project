'use strict'

// builds new player object
function NewPlayer(name) {
  this.name = name;
  this.hand = [];
  this.score = 15;
  this.bet = 0;
}


function NewDealer(){

  this.hand = [];
  this.score = 12;
}

var dealer = new dealer();
var player = new NewPlayer('will');


/*
Author: Iris
Displays a prompt asking to user if he wants to play.
Returns: boolean.
*/
function askUserIfWantsToPlay()
{
  return( confirm('Hi there! \n Do you want to play BlackJack?'));
}


function getRandomNumber(TopNumber)
{
  return(Math.floor(Math.random() * TopNumber));
}

/*
Author: Iris
Obtain a random card that hasn't been dealt.
Returns: Card object.
*/
function getCard()
{
  var cardAlreadyDealt = false;
  var attemtedCard
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
      attemtedCard = deck[getRandomNumber(52)];
      // review in Dealer.hand if the attempt card is there
      for (i=0; i< dealer.hand.length; i++)
      {
        if ((attemtedCard.value === dealer.hand[i].value) && (attemtedCard.suit === dealer.hand[i].suit))
          {
            cardAlreadyDealt = true;  
          }
      }
      // review in NewPlayer.hand if the attemted car is there
      for (i=0; i< player.hand.length; i++)
      {
        if ((attemtedCard.value === player.hand[i].value) && (attemtedCard.suit === player.hand[i].suit))
        {
          cardAlreadyDealt = true;
        }
      }
    }
    while (cardAlreadyDealt === true);
    totalCardsDealt++;
    return(attemtedCard);
  }
}



// CREATE 
var dealer = new NewDealer(); // this is a global variable
var player = new NewPlayer(); // this is a global variable
var totalCardsDealt = 0 //to know how many cards already have been dealt. TODO: reset to 0 when start game

//validate ace value. Card dealt needs to pass through this before being rendered.
function aceValid(cardDealt, indiv){
  while(cardDealt === 'ace'){
    if(indiv.score >= 11){
      cardDealt = 1;
    }else{
      cardDealt = 11;
    }
    console.log(cardDealt)
    console.log(indiv)
  }return(cardDealt)
}

// checks ea hand to see if they have 21
card.prototype.check21 = function (playerOrDealer){
  aceValid(cardDealt, playerOrDealer);

  if(this.score > 21){
    displayResults(`${this.name} has lost`); // this function needs to be created still with a message parameter
  } else if(sumArr(this.score) === 21){
    displayResults(`${this.name} just hit 21!`);
  } else{
    return(renderTtl(this.hand)); // need render total function to return to the DOM.
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
saveData('name', player.name)

//imgCardOne
// render function. elementId has to be a string of playerCard or dealerCard.
function render (elementId, cardImg){
  
  var renderCard = document.createElement('img');
  
  renderCard.src = cardImg.imgPath
  renderCard.alt = cardImg.name
  
  document.getElementById(elementId).appendChild(renderCard)
  
}


  document.getElementById("buttonHit").addEventListener("click", hitButton(event));

  document.getElementById("buttonStay").addEventListener("click", stayButton(event));

  
  function hitButton() {
    player.getCard();
    if(NewPlayer.score > 21) {
      gameResult();
    }
    else if(NewPlayer.score === 21) {
      hitButton.disabled = true;
      standButton.disabled = true;
      gameResult();
    }
  }

  function stayButton() {
    dealerTurn();
    hitButton.disabled = true;
    standButton.disabled = true;
  }

  function results() {
    if (dealer.score > player.score === true) {
      alert( 'The Dealer wins')
    }
    else if(dealer.score < player.score === true) {
        alert('You Win!');
  }
}

