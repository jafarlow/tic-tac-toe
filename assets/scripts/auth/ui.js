'use strict'

//REQUIRE LINK
const store = require("../store")

//REGISTER
const registerSuccess = function (data) {
  console.log("Registration was successful!")
  $("form").trigger("reset")
}

const registerFailure = function (data) {
  console.log("Registration failed")
  $("form").trigger("reset")
}

//LOGIN
const loginSuccess = function (data) {
  console.log("Login was successful!", data);
  store.user = data.user
  $("form").trigger("reset")
}

const loginFailure = function (data) {
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

const changePasswordSuccess = function () {
  console.log("Change password success");
  $("form").trigger("reset")
}

const changePasswordFailure = function () {
  console.log("Change password failure");
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
