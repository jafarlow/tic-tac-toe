'use strict'

//REQUIRE LINKS
const config = require("../config.js")
const store = require("../store.js")


const startGame = function (data) {
  return $.ajax({
    url: config.apiUrl + "/games",
    method: "POST",
    headers: {
      Authorization: "Token token=" + store.user.token
    },
    data: data
  })
}

const chooseTile = function (data) {

  return $.ajax({
    url: config.apiUrl + "/games/" + data.id,
    method: "PATCH",
    headers: {
      Authorization: "Token token=" + store.user.token
    },
    data: data
  })
}

module.exports = {
  chooseTile,
  startGame
}
