const router = require("express").Router()

const{createNewMessage, getAllMessages, deleteMessageById}=require('../controllers/contact')

router.get("/", getAllMessages)

router.post("/message",createNewMessage)

router.delete("/:id", deleteMessageById)
// router.get("/message/:name",createNewMessage)


module.exports = router
