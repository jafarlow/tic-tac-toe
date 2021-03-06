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
  $("#start-button").show()
  $("form").trigger("reset")
  $("#login").hide()
  $("#register-modal").hide()
  $("#logout").show()
  $("#change-password-modal").show()
  $("#get-games").show()
}

const loginFailure = function (data) {
  $("#message").text("Login failed")
  $("form").trigger("reset")
}

//LOGOUT
const logoutSuccess = function () {
  $("#message").text("You have logged out")
  store.user = null
  $("#login").show()
  $("#register-modal").show()
  $("#start-button").hide()
  $("#logout").hide()
  $("#change-password-modal").hide()
  $("#get-games").hide()
  $(".tile").hide()
  $("#new-game-button").hide()
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
