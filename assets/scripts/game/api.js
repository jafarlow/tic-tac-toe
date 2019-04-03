'use strict'

//REQUIRE LINKS
const config = require("../config.js")
const store = require("../store.js")

const chooseTile = function () {
  return $.ajax({
    url: config.apiUrl + "/games/" + id,
    method: "PATCH"
  })
}

module.exports = {
  chooseTile
}
