'use strict';

// builds new player object
function NewPlayer(name) {
  this.name = name;
  this.hand = [];
  this.score = 15;
  this.bet = 0;
}

function Dealer(){
  this.hand = [];
  this.score = 12;
}

var dealer = new Dealer();
var player = new NewPlayer('will');

//validate ace value. Card dealt needs to pass through this before being rendered.
function aceValid(cardDealt, indiv){
  while(cardDealt.name === 'ace'){
    if(indiv.score >= 11){
      cardDealt.value = 1;
    }else{
      cardDealt.value = 11;
    }
    console.log(cardDealt)
    console.log(indiv)
  }return(cardDealt)
}
// pushes card to ttl and hand arr
function pushHand (playerOrDealer){
  aceValid().push(playerOrDealer.score);
  aceValid().push(playerOrDealer.hand);
  
}


// checks ea hand to see if they have 21
function check21(playerOrDealer){
  if(playerOrDealer.score > 21){
    displayResults(`${playerOrDealer.name} has lost`); // playerOrDealer function needs to be created still with a message parameter
  } else if(playerOrDealer.score === 21){
    displayResults(`${playerOrDealer.name} just hit 21!`);
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
saveData('name', player.name)

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

/*
Author: Iris
This function displays a prompt asking to user if he wants to play.
Functions returns: boolean.
*/
function askUserIfWantsToPlay()
{
  return( confirm('Hi there! \n Do you want to play BlackJack?'));
}
