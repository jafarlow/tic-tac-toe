'use strict'

//REQUIRE LINKS
const getFormFields = require("./../../../lib/get-form-fields.js")
const api = require("./api")
const ui = require("./ui")

$("#message").text("Please sign in or register to play")

//REGISTER
const onRegister = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.register(data)
  .then(ui.registerSuccess)
  .catch(ui.registerFailure)
}

//LOGIN
const onLogin = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.login(data)
    .then(ui.loginSuccess)
    .catch(ui.loginFailure)
}

//LOGOUT
const onLogout = function (event) {
  event.preventDefault()

  api.logout()
    .then(ui.logoutSuccess)
    .catch(ui.logoutFailure)
}

//CHANGE PASSWORD
const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

//ALL HANDLERS
const addHandlers = function () {
  $("#register").on("submit", onRegister)
  $("#login").on("submit", onLogin)
  $("#logout").on("click", onLogout)
  $("#change-password").on("submit", onChangePassword)
}

module.exports = {
  addHandlers
}
