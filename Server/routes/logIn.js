const router = require("express").Router()

//Importing controllers
const { verifyUserExists } = require('../controllers/logIn')

//GET Requests

//POST Requests
router.post('/', verifyUserExists)
//PUT Requests

//DELETE Requests

module.exports = router