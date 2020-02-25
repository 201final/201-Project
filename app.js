'use strict'

var playerArr = [];
// builds new player object
function NewPlayer(name) {
  this.name = name;
  this.hand = [1, 14];
  this.score = 0;
  this.bet = 0;
  playerArr.push(this)
}

function dealer(){
  this.hand = [];
  this.score = 0;
}


//validate ace value. Card dealt needs to pass through this before being rendered.
function aceValid(cardDealt){
  while(cardDealt === 'ace'){
    if(sumArr(playerArr[0].hand) >= 11){
      cardDealt = 1;
    }else{
      cardDealt = 11;
    }
  }return(cardDealt)
}

// checks ea hand to see if they have 21
card.prototype.check21 = function (){
  if(sumArr(this.hand) > 21){
    displayResults(`${this.name} has lost`); // this function needs to be created still with a message parameter
  } else if(sumArr(this.hand) === 21){
    displayResults(`${this.name} just hit 21!`);
  } else{
    return(renderTtl(sumArr(this.hand))); // need render total function to return to the DOM.
  } 
}

//sums up an arrays
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
saveData('name', playerArr[0].name)