'use strict';

var card = function(value, suit, name, image){
    this.value = value;
    this.suit = suit; 
    this.name = name;
    this.image = image;
    deck.push(this);
}

var aceOfSpades = new card(1||11, 'Spades', 'Ace', 'svg-cards\ace_of_spades.svg');
var aceOfHearts = new card(1||11, 'Hearts', 'Ace', 'svg-cards\ace_of_hearts.svg');
var aceOfDiamonds = new card(1||11, 'Diamonds', 'Ace', 'svg-cards\ace_of_diamonds.svg');
var aceOfClubs = new card(1||11, 'Clubs', 'Ace', 'svg-cards\ace_of_clubs.svg');
var twoOfSpades = new card(2, 'Spades', 'Two', 'svg-cards\2_of_spades.svg');
var twoOfHearts = new card(2, 'Hearts', 'Two', 'svg-cards\2_of_hearts.svg');
var twoOfDiamonds = new card(2, 'Diamonds', 'Two', 'svg-cards\2_of_diamonds.svg');
var twoOfClubs = new card(2, 'Clubs', 'Two', 'svg-cards\2_of_clubs.svg');
var threeOfSpades = new card(3, 'Spades', 'Three', 'svg-cards\3_of_spades.svg');
var threeOfHearts = new card(3, 'Hearts', 'Three', 'svg-cards\3_of_hearts.svg');
var threeOfDiamonds = new card(3, 'Diamonds', 'Three', 'svg-cards\3_of_diamonds.svg');
var threeOfClubs = new card(3, 'Clubs', 'Three', 'svg-cards\3_of_clubs.svg');
var fourOfSpades = new card(4, 'Spades', 'Four', 'svg-cards\4_of_spades.svg');
var fourOfHearts = new card(4, 'Hearts', 'Four', 'svg-cards\4_of_hearts.svg');
var fourOfDiamonds = new card(4, 'Diamonds', 'Four', 'svg-cards\4_of_diamonds.svg');
var fourOfClubs = new card(4, 'Clubs', 'Four', 'svg-cards\4_of_clubs.svg');
var fiveOfSpades = new card(5, 'Spades', 'Five', 'svg-cards\5_of_spades.svg');
var fiveOfHearts = new card(5, 'Hearts', 'Five', 'svg-cards\5_of_hearts.svg');
var fiveOfDiamonds = new card(5, 'Diamonds', 'Five', 'svg-cards\5_of_diamonds.svg');
var fiveOfClubs = new card(5, 'Clubs', 'Five', 'svg-cards\5_of_clubs.svg');
var sixOfSpades = new card(6, 'Spades', 'Six', 'svg-cards\6_of_spades.svg');
var sixOfHearts = new card(6, 'Hearts', 'Six', 'svg-cards\6_of_hearts.svg');
var sixOfDiamonds = new card(6, 'Diamonds', 'Six', 'svg-cards\6_of_diamonds.svg');
var sixOfClubs = new card(6, 'Clubs', 'Six', 'svg-cards\6_of_clubs.svg');
var sevenOfSpades = new card(7, 'Spades', 'Seven', 'svg-cards\7_of_spades.svg');
var sevenOfHearts = new card(7, 'Hearts', 'Seven', 'svg-cards\7_of_hearts.svg');
var sevenOfDiamonds= new card(7, 'Diamonds', 'Seven', 'svg-cards\7_of_diamonds.svg');
var sevenOfClubs = new card(7, 'Clubs', 'Seven', 'svg-cards\7_of_clubs.svg');
var eightOfSpades = new card(8, 'Spades', 'Eight', 'svg-cards\8_of_spades.svg');
var eightOfHearts = new card(8, 'Hearts', 'Eight', 'svg-cards\8_of_hearts.svg');
var eightOfDiamonds = new card(8, 'Diamonds', 'Eight', 'svg-cards\8_of_diamonds.svg');
var eightOfClubs = new card(8, 'Clubs', 'Eight', 'svg-cards\8_of_clubs.svg');
var nineOfSpades = new card(9, 'Spades', 'Nine', 'svg-cards\9_of_spades.svg');
var nineOfHearts = new card(9, 'Hearts', 'Nine', 'svg-cards\9_of_hearts.svg');
var nineOfDiamonds = new card(9, 'Diamonds', 'Nine', 'svg-cards\9_of_diamonds.svg');
var nineOfClubs = new card(9, 'Clubs', 'Nine', 'svg-cards\9_of_clubs.svg');
var tenOfSpades = new card(10, 'Spades', 'Ten', 'svg-cards\10_of_spades.svg');
var tenOfHearts = new card(10, 'Hearts', 'Ten', 'svg-cards\10_of_hearts.svg');
var tenOfDiamonds = new card(10, 'Diamonds', 'Ten', 'svg-cards\10_of_diamonds.svg');
var tenOfClubs = new card(10, 'Clubs', 'Ten', 'svg-cards\10_of_clubs.svg');
var jackOfSpades = new card(10, 'Spades', 'Jack', 'svg-cards\jack_of_spades.svg');
var jackOfHearts = new card(10, 'Hearts', 'Jack', 'svg-cards\jack_of_hearts.svg');
var jackOfDiamonds = new card(10, 'Diamonds', 'Jack', 'svg-cards\jack_of_diamonds.svg');
var jackOfClubs = new card(10, 'Clubs', 'Jack', 'svg-cards\jack_of_clubs.svg');
var queenOfSpades = new card(10, 'Spades', 'Queen', 'svg-cards\queen_of_spades.svg');
var queenOfHearts = new card(10, 'Hearts', 'Queen', 'svg-cards\queen_of_hearts.svg');
var queenOfDiamonds = new card(10, 'Diamonds', 'Queen', 'svg-cards\queen_of_diamonds.svg');
var queenOfClubs = new card(10, 'Clubs', 'Queen', 'svg-cards\queen_of_clubs.svg');
var kingOfSpades = new card(10, 'Spades', 'King', 'svg-cards\king_of_spades.svg');
var kingOfHearts = new card(10, 'Hearts', 'King', 'svg-cards\king_of_hearts.svg');
var kingOfDiamonds = new card(10, 'Diamonds', 'King', 'svg-cards\king_of_diamonds.svg');
var kingOfClubs = new card(10, 'Clubs', 'King', 'svg-cards\king_of_clubs.svg');


