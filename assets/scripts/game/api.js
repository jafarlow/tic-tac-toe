'use strict'

//REQUIRE LINKS
const config = require("../config.js")
const store = require("../store.js")
const events = require("./events.js")


const startGame = function () {
  return $.ajax({
    url: config.apiUrl + "/games",
    method: "POST",
    headers: {
      Authorization: "Token token=" + store.user.token
    }
  })
}

const chooseTile = function (index, value, gameStatus) {
  return $.ajax({
    url: config.apiUrl + "/games/" + store.game.id,
    method: "PATCH",
    headers: {
      Authorization: "Token token=" + store.user.token
    },
    data: {
      "game": {
        "cell": {
          "index": index,
          "value": value
        },
        "over": gameStatus
      }
    }
  })
}

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + "/games",
    method: "POST",
    headers: {
      Authorization: "Token token=" + store.user.token
    }
  })
}

const getGames = function () {
  return $.ajax({
    url: config.apiUrl + "/games",
    method: "GET",
    headers: {
      Authorization: "Token token=" + store.user.token
    }
  })
}

module.exports = {
  chooseTile,
  startGame,
  newGame,
  getGames
}
