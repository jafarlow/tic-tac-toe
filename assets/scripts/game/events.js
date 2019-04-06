'use strict'

//REQUIRE LINKS
const getFormFields = require("./../../../lib/get-form-fields.js")
const api = require("./api.js")
const ui = require("./ui.js")

//SET CURRENT PLAYER -- will be updated in the function below based on turn
let currentPlayer = "X"

const onLogin = function () {
  $("#start-button").show()
}

const gameBoard = ["","","","","","","","",""]

const gameOver = function (array) {
  // determine if gameBoard has been filled with X or O
  const isFull = function (array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "") {
        return false
      }
    }
    return true
  }
  // Is the game over? -- win/tie
  if ((gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && currentPlayer === gameBoard[0])
  || (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && currentPlayer === gameBoard[3])
  || (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && currentPlayer === gameBoard[6])
  || (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && currentPlayer === gameBoard[0])
  || (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && currentPlayer === gameBoard[1])
  || (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && currentPlayer === gameBoard[2])
  || (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && currentPlayer === gameBoard[0])
  || (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && currentPlayer === gameBoard[2])) {
    $("#message").text("Player " + currentPlayer + " wins!")
    // TURN OFF THE CLICK HANDLER WHEN WINNING
    $(".tile").off("click", onChooseTile)
  } else if (isFull(gameBoard)) {
      $("#message").text("It's a draw")
  } else {
      //CHANGE PLAYER
      if (currentPlayer === "X") {
        currentPlayer = "O"
      } else {
        currentPlayer = "X"
      }
    $("#message").text("Player " + currentPlayer + "'s turn")
  }
}

//TILE INTERACTION
const onChooseTile = function (event) {
  event.preventDefault()

  // is the box empty? -- .text getter!
  if ($(event.target).text() === "") {
    // .text setter!
    $(event.target).text(currentPlayer)
    // update the array index with clicked tile value
    const index = $(event.target).data("id")
    gameBoard[index] = currentPlayer
    // Check the win condition
    gameOver()
  } else {
    $("#message").text("That cell is taken!")
  }

  const data = gameBoard
  api.chooseTile(data)
    .then(ui.chooseTileSuccess)
    .catch(ui.chooseTileFailure)
}

// START GAME
const onStartGame = function (event) {
  event.preventDefault()

  // open the board to interaction
  $(".tile").show()
  $("#start-button").hide()
  $("#new-game-button").show()
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

// CREATE NEW GAME
const onNewGame = function (event) {
  event.preventDefault()

  // clear the board and prepare for new user input
  const newGameBoard = ["","","","","","","","",""]
  gameBoard = newGameBoard
  $(".tile").text("")
}

//ALL HANDLERS
const addHandlers = function () {
  $("#start-game").on("click", onStartGame)
  $(".tile").on("click", onChooseTile)
  $("#login").on("submit", onLogin)
  $("#new-game-button").on("click", onNewGame)
}

module.exports = {
  addHandlers
}
