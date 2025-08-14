function maxScorePlayer(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }
  if (player1.score > player2.score) {
    return player1.name;
  } else if (player1.score < player2.score) {
    return player2.name;
  } else {
    return "Tie";
  }
}

console.log(maxScorePlayer({name:"Alice",score:60},{name:"Bob",score:90}));
