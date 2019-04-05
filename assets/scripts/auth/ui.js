'use strict'

//REQUIRE LINK
const store = require("../store")

//REGISTER
const registerSuccess = function () {
  console.log("Registration was successful!")
  $("form").trigger("reset")
}

const registerFailure = function () {
  console.log("Registration failed")
  $("form").trigger("reset")
}

//LOGIN
const loginSuccess = function () {
  console.log("Login was successful!", data);
  store.user = data.user
  $("form").trigger("reset")
}

const loginFailure = function () {
  console.log("Login failed")
  $("form").trigger("reset")
}

//LOGOUT
const logoutSuccess = function () {
  console.log("User has logged out");
  store.user = null
}

const logoutFailure = function () {
  console.log("User logout has failed");
}

module.exports = {
  registerSuccess,
  registerFailure,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure
}
