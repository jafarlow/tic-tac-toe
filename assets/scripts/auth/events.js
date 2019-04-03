'use strict'

//REQUIRE LINKS
const getFormFields = require("./../../../lib/get-form-fields.js")
const api = require("./api")
const ui = require("./ui")


//LOGIN
const onLogin = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.login(data)
    .then(ui.loginSuccess)
    .catch(ui.loginFailure)
}

//REGISTER
const onRegister = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.register(data)
    .then(ui.registerSuccess)
    .catch(ui.registerFailure)
}

//ALL HANDLERS
const addHandlers = function () {
  $("#login").on("submit", onLogin)
  $("#register").on("click", onRegister)
}

module.exports = {
  addHandlers
}
