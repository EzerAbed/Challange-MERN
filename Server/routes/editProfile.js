const router = require("express").Router()

//importing the controllers
const { upadatUserPassword } = require('../controllers/editProfile')


//GET Requists

//POST Requists


//PUT Requists
router.put("/:id", upadatUserPassword)

//DELETE Requists

module.exports = router