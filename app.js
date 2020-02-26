// 'use strict'

// // builds new player object
// function NewPlayer(name) {
//   this.name = name;
//   this.hand = [];
//   this.score = 15;
//   this.bet = 0;
// }


// function NewDealer(){

//   this.hand = [];
//   this.score = 12;
// }

// var dealer = new Dealer();
// var player = new NewPlayer('will');


// /*
// Author: Iris
// Displays a prompt asking to user if he wants to play.
// Returns: boolean.
// */
// function askUserIfWantsToPlay()
// {
//   return( confirm('Hi there! \n Do you want to play BlackJack?'));
// }


// function getRandomNumber(TopNumber)
// {
//   return(Math.floor(Math.random() * TopNumber));
// }

// /*
// Author: Iris
// Obtain a random card that hasn't been dealt.
// Returns: Card object.
// */
// function getCard()
// {
//   var cardAlreadyDealt = false;
//   var attemtedCard
//   var i;
//   if (totalCardsDealt===52)
//     alert('All cards have been dealt');
//   else
//   {
//     // if card has been found in some hand, get another ramdon card.
//     do
//     {
//       cardAlreadyDealt = false;
//       // obtain a random number between 1-51
//       attemtedCard = deck[getRandomNumber(52)];
//       // review in Dealer.hand if the attempt card is there
//       for (i=0; i< dealer.hand.length; i++)
//       {
//         if ((attemtedCard.value === dealer.hand[i].value) && (attemtedCard.suit === dealer.hand[i].suit))
//           {
//             cardAlreadyDealt = true;  
//           }
//       }
//       // review in NewPlayer.hand if the attemted car is there
//       for (i=0; i< player.hand.length; i++)
//       {
//         if ((attemtedCard.value === player.hand[i].value) && (attemtedCard.suit === player.hand[i].suit))
//         {
//           cardAlreadyDealt = true;
//         }
//       }
//     }
//     while (cardAlreadyDealt === true);
//     totalCardsDealt++;
//     return(attemtedCard);
//   }
// }



// // CREATE 
// var dealer = new NewDealer(); // this is a global variable
// var player = new NewPlayer(); // this is a global variable
// var totalCardsDealt = 0 //to know how many cards already have been dealt. TODO: reset to 0 when start game

// //validate ace value. Card dealt needs to pass through this before being rendered.
// function aceValid(cardDealt, indiv){
//   while(cardDealt.name === 'ace'){
//     if(indiv.score >= 11){
//       cardDealt.value = 1;
//     }else{
//       cardDealt.value = 11;
//     }
//     console.log(cardDealt)
//     console.log(indiv)
//   }return(cardDealt)
// }
// // pushes card to ttl and hand arr
// function pushHand (playerOrDealer){
//   aceValid().push(playerOrDealer.score);
//   aceValid().push(playerOrDealer.hand);
  
// }


// // checks ea hand to see if they have 21
// function check21(playerOrDealer){
//   if(playerOrDealer.score > 21){
//     displayResults(`${playerOrDealer.name} has lost`); // playerOrDealer function needs to be created still with a message parameter
//   } else if(playerOrDealer.score === 21){
//     displayResults(`${playerOrDealer.name} just hit 21!`);
//   } else{
//     return(false); 
//   } 
// }

// // sums up an arrays
// function sumArr(arr){ 
//   var i = 0;
//   var ttl = 0;
//   while (i < arr.length){
//     ttl = ttl + arr[i];
//     i++;
//   }
//   return(ttl);
// }
// // save to local storage function
// function saveData(key, data){
//   localStorage.setItem(key, JSON.stringify(data));
// }

// // saves user name to local storage
// saveData('name', player.name)

// // render function. elementId has to be a string of playerCard or dealerCard.
// function render (elementId, cardImg){
  
//   var renderCard = document.createElement('img');
  
//   renderCard.src = cardImg.imgPath
//   renderCard.alt = cardImg.name
  
//   document.getElementById(elementId).appendChild(renderCard) 
// }
// // action for dealers turn
// function dealerTurn(){
//   while(check21('Dealer') === false){
//     render('dealerCard', pushHand())
//   }
// }


//   document.getElementById("buttonHit").addEventListener("click", hitButton(event));

//   document.getElementById("buttonStay").addEventListener("click", stayButton(event));

  
//   function hitButton() {
//     player.getCard();
//     if(NewPlayer.score > 21) {
//       gameResult();
//     }
//     else if(NewPlayer.score === 21) {
//       hitButton.disabled = true;
//       standButton.disabled = true;
//       gameResult();
//     }
//   }

//   function stayButton() {
//     dealerTurn();
//     hitButton.disabled = true;
//     standButton.disabled = true;
//   }

//   function results() {
//     if (dealer.score > player.score === true) {
//       alert( 'The Dealer wins')
//     }
//     else if(dealer.score < player.score === true) {
//         alert('You Win!');
//   }
// }

// var playAgain = confirm('Would You Like To Play Again?');
// if (playAgain == true) {
//   //start game function
// } else {
//     alert('Bye Bye!')
// }


'use strict'
// builds new player object
function NewPlayer(name) {
  this.name = name;
  this.hand = [];
  this.score = 0;
  this.bet = 0;
}
function NewDealer(){
  this.name = 'Dealer';
  this.hand = [];
  this.score = 0;
}
// GLOBAL VARIABLES
var player, dealer;
// MAIN function which xs the game
startGame();
function startGame(){
  if (askUserIfWantsToPlay())
  {
    dealer = new NewDealer();
    player =  new NewPlayer(getName());
    // TODO: reset HTML to initial form (without cards or labels).
    giveInitialCards();
  }
  else
  {
    alert('Have a nice day!');
  }
}
function resetGame()
{
  dealer.hand = [];
  dealer.score = 0;
  player.hand = [];
  player.score = 0;
  //TODO ask for a bet
  giveInitialCards();
}
/*
Gives 2 cards for the player and 1 for the dealer at the beggining of the game.
*/
function giveInitialCards()
{
  pushHand(player);
  pushHand(player);
  check21(player);
  pushHand(dealer);
}
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
function getRandomNumber(TopNumber){
  return(Math.floor(Math.random() * TopNumber));
}
function getName(){
  return(prompt('Whats your name?'))
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
  return(attemptedCard);
}
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
  var newCard;
  newCard = getCard();
  newCard = aceValid(newCard, playerOrDealer);
  playerOrDealer.hand.push(newCard);
  playerOrDealer.score =  playerOrDealer.score + newCard.value;
  renderCard(playerOrDealer, newCard);
}
// checks ea hand to see if they have 21
function check21(playerOrDealer){
  if(playerOrDealer.score > 21){
    results(`${playerOrDealer.name} has lost`); // playerOrDealer function needs to be created still with a message parameter
    askWantsToPlayAgain();
  } else if(playerOrDealer.score === 21){
    results(`${playerOrDealer.name} just hit 21!`);
    askWantsToPlayAgain();
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
saveData('name', NewPlayer.name)  //TODO: check if we are going to move this to a function
// render function. elementId has to be a string of playerCard or dealerCard.
// function render (elementId, cardImg){
function renderCard(playerOrDealer, cardToRender){
  var imgParentContainer;
  if (playerOrDealer.name === 'Dealer')
  {
    imgParentContainer = document.getElementById('dealerCard');
  }
  else
  {
    imgParentContainer = document.getElementById('player');
  }
  var newCardImage = document.createElement('img');
  newCardImage.src = cardToRender.image;
  newCardImage.alt = (cardToRender.value + ' ' + cardToRender.suit);
  imgParentContainer.appendChild(newCardImage);
}
function dealerTurn(){
  do
    pushHand(dealer);
  while (check21(dealer) === false);
}
document.getElementById("buttonHit").addEventListener("click", hitButton);
document.getElementById("buttonStay").addEventListener("click", stayButton);
function hitButton(event) {
  pushHand(player);
  check21(player);
}
function stayButton() {
  hitButton.disabled = true;
  // standButton.disabled = true; this does not exist
  dealerTurn();
}
function results(message) {
  if (dealer.score > player.score === true) {
    return(alert( message))
  }
  else if(dealer.score < player.score === true) {
    return(alert( message))
  }
}
function askWantsToPlayAgain()
{
  var playAgain = confirm('Would You Like To Play Again?');
  if (playAgain == true) {
    resetGame();
  } else {
      alert('See you later!');
  }
}