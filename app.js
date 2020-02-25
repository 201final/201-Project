'use strict'

// builds new player object
function NewPlayer(name) {
  this.name = name;
  this.hand = [];
  this.score = 15;
  this.bet = 0;
}

function dealer(){
  this.hand = [];
  this.score = 12;
}

var dealer = new dealer();
var player = new NewPlayer('will');

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

// render function. elementId has to be a string of playerCard or dealerCard.
function render (elementId, cardImg){
  
  var renderCard = document.createElement('img');
  
  renderCard.src = cardImg.imgPath
  renderCard.alt = cardImg.name
  
  document.getElementById(elementId).appendChild(renderCard) 
}


