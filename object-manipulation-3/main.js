// console.log('Lodash is loaded:', typeof _ !== 'undefined');

// declare object variable players that hold 4 objects with each holding a name property as string...
// and hand property as empty array literal
var players = {
  player1: { name: 'Neil', hand: [] },
  player2: { name: 'Breen', hand: [] },
  player3: { name: 'Tommy', hand: [] },
  player4: { name: 'Wiseau', hand: [] }
};

// declare variable array literals holding ranks and suits list in order to create a new deck
var arrayRank = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
var arraySuit = ['clubs', 'diamonds', 'hearts', 'spades'];

// create a new deck
function createDeckArray(rank, suit) {
  var deck = [];
  for (var i = 0; i < suit.length; i++) {
    for (var n = 0; n < rank.length; n++) {
      // tempObj holds a temporary object that holds 2 properties and will be...
      // ... appended to deck
      var tempObj = {};
      tempObj[suit[i]] = rank[n];
      deck.push(tempObj);
    }
  }
  return deck;
}

var arrayDeck = createDeckArray(arrayRank, arraySuit);

function shuffle(deck) {
  for (var i = deck.length - 1; i > 0; i--) {
    // generate random number according to range with deck size
    var j = Math.floor(Math.random() * (i + 1));
    var temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}

var shuffledDeck = shuffle(arrayDeck);

function calculate(player) {
  var sum = 0;
  // goes through each card obj
  for (var i = 0; i < player.hand.length; i++) {
    // access the key and value of the card obj
    for (var suit in player.hand[i]) {
      // evaluates the rank and their number value
      if (player.hand[i][suit] === 'ace') {
        sum += 11;
      } else if ((player.hand[i][suit] === 'jack') || (player.hand[i][suit] === 'queen') || (player.hand[i][suit] === 'king')) {
        sum += 10;
      } else {
        sum += player.hand[i][suit];
      }
    }
  }
  return sum;
}

// overall game that 4 players play
function game() {
  // the game continues until the deck is empty
  while (shuffledDeck.length > 0) {
    var card1;
    var card2;

    // in case the deck runs low and there are only 4 cards left in the deck, ...
    // ... then each player draws just 1 card
    if (shuffledDeck.length === 4) {
      for (var player in players) {
        card1 = shuffledDeck.pop();
        players[player].hand.push(card1);
      }
    } else {
      // otherwise, draw 2 cards from the deck and append them to the player's hand
      for (player in players) {
        card1 = shuffledDeck.pop();
        card2 = shuffledDeck.pop();
        players[player].hand.push(card1);
        players[player].hand.push(card2);
      }
    }
  }

  // calling the calculate function to get total score
  var player1score = calculate(players.player1);
  var player2score = calculate(players.player2);
  var player3score = calculate(players.player3);
  var player4score = calculate(players.player4);

  // determine the largest number among the players's score
  var maxScore = Math.max(player1score, player2score, player3score, player4score);

  // display winner along with the score and hand
  if (player1score === maxScore) {
    console.log(players.player1.name + ' won! Score: ' + maxScore);
    console.log('total hand: ', players.player1.hand);
  } else if (player2score === maxScore) {
    console.log(players.player2.name + ' won! Score: ' + maxScore);
    console.log('total hand: ', players.player2.hand);
  } else if (player3score === maxScore) {
    console.log(players.player3.name + ' won! Score: ' + maxScore);
    console.log('total hand: ', players.player3.hand);
  } else if (player4score === maxScore) {
    console.log(players.player4.name + ' won! Score: ' + maxScore);
    console.log('total hand: ', players.player4.hand);
  }

}

// calls the game function
game();
