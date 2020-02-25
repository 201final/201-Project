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
  this.gameDeck = [];
}

/*
Author: Iris
This function displays a prompt asking to user if he wants to play.
Functions returns: boolean.
*/
function askUserIfWantsToPlay()
{
  return( confirm('Hi there! \n Do you want to play BlackJack?'));
}