'use strict'

//REQUIRE LINK
const store = require("../store")

//LOGIN
const loginSuccess = function () {
  console.log("Login was successful!");
  store.user = data.user
  $("form").trigger("reset")
}

const loginFailure = function () {
  console.log("Login failed")
  $("form").trigger("reset")
}

//REGISTER
const registerSuccess = function () {
  console.log("Registration was successful!")
}

const registerFailure = function () {
  console.log("Registration failed")
}

module.exports = {
  loginSuccess,
  loginFailure,
  registerSuccess,
  registerFailure
}
