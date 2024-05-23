const router = require("express").Router()

//importing the controllers
const { createNewUser } = require('../controllers/SignUp')


//GET Requists

//POST Requists
router.post("/", createNewUser)
//PUT Requists

//DELETE Requists

module.exports = router
