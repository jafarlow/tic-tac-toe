'use strict'


let currentPlayer = "X"

const startGameSuccess = function () {
  $("#message").text("Player " + currentPlayer + "'s turn")
}

const startGameFailure = function () {
  $("#message").text("Something went wrong")
}

module.exports = {
  startGameSuccess,
  startGameFailure
}
