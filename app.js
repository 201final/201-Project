'use strict';

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