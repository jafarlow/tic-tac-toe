'use strict'

//REQUIRE LINKS
const userAuth = require("./auth/events.js")
const userEvents = require("./game/events.js")
// 1 link for registering, logging in, loggin out
// 1 link for interacting with the grid
// ??1 link for starting and resetting the game board??

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  userAuth.addHandlers()
  userEvents.addHandlers()
})
