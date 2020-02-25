'use strict';

function NewPlayer(name) {
  this.name = name;
  this.hand = [];
  this.score = 0;
  this.bet = 0;
}

function Dealer(){
  this.hand = [];
  this.score = 0;
}

function Deck(){
  this.DeckCards = [];
}
// TBD: are we going to have deck.getCard and/or deck.addCard (basically a deckCards.push)

/*
Author: Iris
This function displays a prompt asking to user if he wants to play.
Functions returns: boolean.
*/
function askUserIfWantsToPlay()
{
  return( confirm('Hi there! \n Do you want to play BlackJack?'));
}