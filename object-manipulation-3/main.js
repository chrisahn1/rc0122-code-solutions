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
      tempObj.suit = suit[i];
      tempObj.rank = rank[n];
      deck.push(tempObj);
    }
  }
  return deck;
}

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

function calculate(hand) {
  var sum = 0;
  for (var i = 0; i < hand.length; i++) {
    if (hand[i].rank === 'ace') {
      sum += 11;
    } else if (hand[i].rank === 'jack' || hand[i].rank === 'queen' || hand[i].rank === 'king') {
      sum += 10;
    } else {
      sum += hand[i].rank;
    }
  }
  return sum;
}

// overall game that 4 players play
function game() {
  var playerScores = [];
  var arrayDeck = createDeckArray(arrayRank, arraySuit);
  var shuffledDeck = shuffle(arrayDeck);
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
    // calculating total sum for each player's hand
    playerScores.push(calculate(players.player1.hand));
    playerScores.push(calculate(players.player2.hand));
    playerScores.push(calculate(players.player3.hand));
    playerScores.push(calculate(players.player4.hand));

    var tieScores = [];
    var tiePlayers = [];
    var playerName = '';
    var max = 0;
    for (var i = 0; i < playerScores.length; i++) {
      if (playerScores[i] > max) {
        max = playerScores[i];
        if (i === 0) {
          playerName = players.player1.name;
        } else if (i === 1) {
          playerName = players.player2.name;
        } else if (i === 2) {
          playerName = players.player3.name;
        } else if (i === 3) {
          playerName = players.player4.name;
        }
      } else if (playerScores[i] === max) {
        tieScores.push(playerScores[i]);
        if (i === 0) {
          tiePlayers.push(players.player1.name);
        } else if (i === 1) {
          tiePlayers.push(players.player2.name);
        } else if (i === 2) {
          tiePlayers.push(players.player3.name);
        } else if (i === 3) {
          tiePlayers.push(players.player4.name);
        }
      }
    }
    console.log('playerScores: ', playerScores);

    if (tieScores.length > 0 && max === tieScores[0]) {
      console.log('Tie!');
      console.log(playerName + ' score: ', max);
      for (i = 0; i < tieScores.length; i++) {
        console.log(tiePlayers[i] + ' score: ', tieScores[i]);
      }
    } else {
      if (playerName === players.player1.name) {
        console.log(players.player1.name + ' wins! Score: ', max);
      } else if (playerName === players.player2.name) {
        console.log(players.player2.name + ' wins! Score: ', max);
      } else if (playerName === players.player3.name) {
        console.log(players.player3.name + ' wins! Score: ', max);
      } else if (playerName === players.player4.name) {
        console.log(players.player4.name + ' wins! Score: ', max);
      }
    }
    console.log('\n');
    // refresh hand for each player
    players.player1.hand = [];
    players.player2.hand = [];
    players.player3.hand = [];
    players.player4.hand = [];

    playerScores = [];
  }

}

// calls the game function
game();
