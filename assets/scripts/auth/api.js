'use strict'

//REQUIRE LINKS
const config = require("../config")
const store = require("../store")

//LOGIN
const login = function (data) {
  return $.ajax({
    url: config.apiUrl + "/sign-in",
    method: "POST",
    data: data
  })
}

//REGISTER
const register = function (data) {
  return $.ajax ({
    url: config.apiUrl + "/sign-up",
    method: "POST",
    data: data
  })
}

module.exports = {
  login,
  register
}
