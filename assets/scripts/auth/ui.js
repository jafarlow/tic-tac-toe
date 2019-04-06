'use strict'

//REQUIRE LINK
const store = require("../store")

//REGISTER
const registerSuccess = function (data) {
  $("#message").text("Registration was successful!")
  $("form").trigger("reset")
}

const registerFailure = function (data) {
  $("#message").text("Registration failed")
  $("form").trigger("reset")
}

//LOGIN
const loginSuccess = function (data) {
  store.user = data.user
  $("#message").text("Welcome!")
  $("form").trigger("reset")
}

const loginFailure = function (data) {
  $("#message").text("Login failed")
  $("form").trigger("reset")
}

//LOGOUT
const logoutSuccess = function () {
  $("#message").text("You have logged out")
  store.user = null
}

const logoutFailure = function () {
  $("#message").text("Logout has failed")
}

const changePasswordSuccess = function () {
  $("#message").text("Change password success")
  $("form").trigger("reset")
}

const changePasswordFailure = function () {
  $("#message").text("Change password failure")
  $("form").trigger("reset")
}

module.exports = {
  registerSuccess,
  registerFailure,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
