'use strict'

//REQUIRE LINKS
const getFormFields = require("./../../../lib/get-form-fields.js")
const api = require("./api.js")
const ui = require("./ui.js")
const store = require("../store")

//SET CURRENT PLAYER -- will be updated in the function below based on turn
let currentPlayer = "X"

const onLogin = function () {
  $("#start-button").show()
}

let gameBoard = ["","","","","","","","",""]

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
    $("#new-game-button").show()
  } else if (isFull(gameBoard)) {
      $("#message").text("It's a draw")
      $("#new-game-button").show()
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

  const index = $(event.target).data("cell-index")
  //store.player = currentPlayer
  // is the box empty? -- .text getter!
  if ($(event.target).text() === "") {
    // .text setter!
    $(event.target).text(currentPlayer)
    // update the array index with clicked tile value
    gameBoard[index] = currentPlayer
    // Check the win condition
    gameOver(gameBoard)
  } else {
    $("#message").text("That cell is taken!")
  }

  // const id = store.game //confirmed defined -- store.game is on ui.js
  //store.index = index
  // console.log(store);
  //debugger
  api.chooseTile(index, currentPlayer, gameOver())
    .then(ui.chooseTileSuccess)
    .catch(ui.chooseTileFailure)
}

// START FIRST GAME
const onStartGame = function (event) {
  event.preventDefault()

  // open the board to interaction
  $(".tile").show()
  $("#start-button").hide()
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
  $("#new-game-button").hide()
  $(".tile").text("")
  $(".tile").on("click", onChooseTile)
  $("#message").text("Player " + currentPlayer + "'s turn")
  api.newGame()
    .then()
    .catch()
}

//ALL HANDLERS
const addHandlers = function () {
  $("#start-game").on("click", onStartGame)
  $(".tile").on("click", onChooseTile)
  $("#login").on("submit", onLogin)
  $("#new-game-button").on("click", onNewGame)
}

module.exports = {
  addHandlers,
  gameOver
}
