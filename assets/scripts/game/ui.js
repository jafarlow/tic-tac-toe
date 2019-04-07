'use strict'
//REQUIRE LINK
const store = require("../store")

let currentPlayer = "X"

const startGameSuccess = function (response) {
  store.game = response.game
  $("#message").text("Player " + currentPlayer + "'s turn")
}

const startGameFailure = function () {
  $("#message").text("Something went wrong")
}

const chooseTileSuccess = function (response) {
}

const chooseTileFailure = function (response) {
  $("#message").text("Something went wrong with tile selection")
}

const newGameSuccess = function (response) {
  store.game = response.game
  $("#message").text("Player " + currentPlayer + "'s turn")
}

const newGameFailure = function (response) {
  $("#message").text("Something went wrong")
}

const getGamesSuccess = function (response) {
  let numGames = 0
  const result = response.games.filter(function (game) {
    if (game.over) {
      numGames++
    }
  })
  $("#message").text("You have played " + numGames + " games.")
}

const getGamesFailure = function () {
  $("#message").text("Unable to find games")
}

module.exports = {
  startGameSuccess,
  startGameFailure,
  chooseTileSuccess,
  chooseTileFailure,
  newGameSuccess,
  newGameFailure,
  getGamesSuccess,
  getGamesFailure
}
