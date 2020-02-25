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


//validate ace value
function aceValid(cardDealt){
  while(cardDealt === 'ace'){
    if(sumArr(playerArr[0].hand) >= 11){
      cardDealt = 1;
    }else{
      cardDealt = 11;
    }
  }return(cardDealt)
}

function sumArr(arr){ //sums up an array
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