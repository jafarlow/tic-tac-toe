'use strict'

//REQUIRE LINKS
const getFormFields = require("./../../../lib/get-form-fields.js")

//
const onChooseTile = function (event) {
  event.preventDefault()

  api.chooseTile()
    .then(ui.chooseTileSuccess)
    .catch(ui.chooseTileFailure)
}


//ALL HANDLERS
const addHandlers = function () {
  $(".tile").on("click", onChooseTile)
}

module.exports = {
  addHandlers
}
