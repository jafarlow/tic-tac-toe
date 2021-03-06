'use strict'

//REQUIRE LINKS
const config = require("../config")
const store = require("../store")

//REGISTER
const register = function (data) {
  return $.ajax({
    url: config.apiUrl + "/sign-up",
    method: "POST",
    data: data
  })
}

//LOGIN
const login = function (data) {
  return $.ajax({
    url: config.apiUrl + "/sign-in",
    method: "POST",
    data: data
  })
}

//LOGOUT
const logout = function () {
  return $.ajax({
    url: config.apiUrl + "/sign-out",
    method: "DELETE",
    headers: {
      Authorization: "Token token=" + store.user.token
    }
  })
}

//CHANGE PASSWORD
const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + "/change-password",
    method: "PATCH",
    headers: {
      Authorization: "Token token=" + store.user.token
    },
    data: data
  })
}

module.exports = {
  register,
  login,
  logout,
  changePassword
}
