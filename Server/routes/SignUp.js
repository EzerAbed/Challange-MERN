const router = require("express").Router()

//importing the controllers
const { createNewUser, getAllUsers, deleteUserById } = require('../controllers/SignUp')


//GET Requists
router.get("/", getAllUsers)

//POST Requists
router.post("/", createNewUser)

//PUT Requists

//DELETE Requists
router.delete("/:id", deleteUserById)

module.exports = router
