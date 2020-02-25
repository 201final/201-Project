'use strict'

function NewPlayer(name) {
  this.name = name;
  this.hand = [];
  this.score = 0;
  this.bet = 0;
}

function dealer(){
  this.hand = [];
  this.score = 0;
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