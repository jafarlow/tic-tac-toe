'use strict'
//REQUIRE LINK
const store = require("../store")

let currentPlayer = "X"

const startGameSuccess = function (response) {
  console.log("ARG", response);
  store.game = response.game
  $("#message").text("Player " + currentPlayer + "'s turn")
}

const startGameFailure = function () {
  $("#message").text("Something went wrong")
}

const chooseTileSuccess = function (response) {
  console.log("Yo dawg, it's working", response);
}

const chooseTileFailure = function (response) {
  console.log("Oh no!", response);
  $("#message").text("Something went wrong with tile selection")
}

module.exports = {
  startGameSuccess,
  startGameFailure
}
