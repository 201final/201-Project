var deck = []; 

var Card = function(value, suit, name, image){
    this.value = value;
    this.suit = suit; 
    this.name = name;
    this.image = image;
    deck.push(this);
}

var aceOfSpades = new Card(1||11, 'Spades', 'Ace', 'svg-cards\ace_of_spades.svg');
var aceOfHearts = new Card(1||11, 'Hearts', 'Ace', 'svg-cards\ace_of_hearts.svg');
var aceOfDiamonds = new Card(1||11, 'Diamonds', 'Ace', 'svg-cards\ace_of_diamonds.svg');
var aceOfClubs = new Card(1||11, 'Clubs', 'Ace', 'svg-cards\ace_of_clubs.svg');
var twoOfSpades = new Card(2, 'Spades', 'Two', 'svg-cards\2_of_spades.svg');
var twoOfHearts = new Card(2, 'Hearts', 'Two', 'svg-cards\2_of_hearts.svg');
var twoOfDiamonds = new Card(2, 'Diamonds', 'Two', 'svg-cards\2_of_diamonds.svg');
var twoOfClubs = new Card(2, 'Clubs', 'Two', 'svg-cards\2_of_clubs.svg');
var threeOfSpades = new Card(3, 'Spades', 'Three', 'svg-cards\3_of_spades.svg');
var threeOfHearts = new Card(3, 'Hearts', 'Three', 'svg-cards\3_of_hearts.svg');
var threeOfDiamonds = new Card(3, 'Diamonds', 'Three', 'svg-cards\3_of_diamonds.svg');
var threeOfClubs = new Card(3, 'Clubs', 'Three', 'svg-cards\3_of_clubs.svg');
var fourOfSpades = new Card(4, 'Spades', 'Four', 'svg-cards\4_of_spades.svg');
var fourOfHearts = new Card(4, 'Hearts', 'Four', 'svg-cards\4_of_hearts.svg');
var fourOfDiamonds = new Card(4, 'Diamonds', 'Four', 'svg-cards\4_of_diamonds.svg');
var fourOfClubs = new Card(4, 'Clubs', 'Four', 'svg-cards\4_of_clubs.svg');
var fiveOfSpades = new Card(5, 'Spades', 'Five', 'svg-cards\5_of_spades.svg');
var fiveOfHearts = new Card(5, 'Hearts', 'Five', 'svg-cards\5_of_hearts.svg');
var fiveOfDiamonds = new Card(5, 'Diamonds', 'Five', 'svg-cards\5_of_diamonds.svg');
var fiveOfClubs = new Card(5, 'Clubs', 'Five', 'svg-cards\5_of_clubs.svg');
var sixOfSpades = new Card(6, 'Spades', 'Six', 'svg-cards\6_of_spades.svg');
var sixOfHearts = new Card(6, 'Hearts', 'Six', 'svg-cards\6_of_hearts.svg');
var sixOfDiamonds = new Card(6, 'Diamonds', 'Six', 'svg-cards\6_of_diamonds.svg');
var sixOfClubs = new Card(6, 'Clubs', 'Six', 'svg-cards\6_of_clubs.svg');
var sevenOfSpades = new Card(7, 'Spades', 'Seven', 'svg-cards\7_of_spades.svg');
var sevenOfHearts = new Card(7, 'Hearts', 'Seven', 'svg-cards\7_of_hearts.svg');
var sevenOfDiamonds= new Card(7, 'Diamonds', 'Seven', 'svg-cards\7_of_diamonds.svg');
var sevenOfClubs = new Card(7, 'Clubs', 'Seven', 'svg-cards\7_of_clubs.svg');
var eightOfSpades = new Card(8, 'Spades', 'Eight', 'svg-cards\8_of_spades.svg');
var eightOfHearts = new Card(8, 'Hearts', 'Eight', 'svg-cards\8_of_hearts.svg');
var eightOfDiamonds = new Card(8, 'Diamonds', 'Eight', 'svg-cards\8_of_diamonds.svg');
var eightOfClubs = new Card(8, 'Clubs', 'Eight', 'svg-cards\8_of_clubs.svg');
var nineOfSpades = new Card(9, 'Spades', 'Nine', 'svg-cards\9_of_spades.svg');
var nineOfHearts = new Card(9, 'Hearts', 'Nine', 'svg-cards\9_of_hearts.svg');
var nineOfDiamonds = new Card(9, 'Diamonds', 'Nine', 'svg-cards\9_of_diamonds.svg');
var nineOfClubs = new Card(9, 'Clubs', 'Nine', 'svg-cards\9_of_clubs.svg');
var tenOfSpades = new Card(10, 'Spades', 'Ten', 'svg-cards\10_of_spades.svg');
var tenOfHearts = new Card(10, 'Hearts', 'Ten', 'svg-cards\10_of_hearts.svg');
var tenOfDiamonds = new Card(10, 'Diamonds', 'Ten', 'svg-cards\10_of_diamonds.svg');
var tenOfClubs = new Card(10, 'Clubs', 'Ten', 'svg-cards\10_of_clubs.svg');
var jackOfSpades = new Card(10, 'Spades', 'Jack', 'svg-cards\jack_of_spades.svg');
var jackOfHearts = new Card(10, 'Hearts', 'Jack', 'svg-cards\jack_of_hearts.svg');
var jackOfDiamonds = new Card(10, 'Diamonds', 'Jack', 'svg-cards\jack_of_diamonds.svg');
var jackOfClubs = new Card(10, 'Clubs', 'Jack', 'svg-cards\jack_of_clubs.svg');
var queenOfSpades = new Card(10, 'Spades', 'Queen', 'svg-cards\queen_of_spades.svg');
var queenOfHearts = new Card(10, 'Hearts', 'Queen', 'svg-cards\queen_of_hearts.svg');
var queenOfDiamonds = new Card(10, 'Diamonds', 'Queen', 'svg-cards\queen_of_diamonds.svg');
var queenOfClubs = new Card(10, 'Clubs', 'Queen', 'svg-cards\queen_of_clubs.svg');
var kingOfSpades = new Card(10, 'Spades', 'King', 'svg-cards\king_of_spades.svg');
var kingOfHearts = new Card(10, 'Hearts', 'King', 'svg-cards\king_of_hearts.svg');
var kingOfDiamonds = new Card(10, 'Diamonds', 'King', 'svg-cards\king_of_diamonds.svg');
var kingOfClubs = new Card(10, 'Clubs', 'King', 'svg-cards\king_of_clubs.svg');


console.log(sixOfClubs);