const router = require("express").Router()

const{createNewMessage}=require('../controllers/contact')

router.post("/message",createNewMessage)
// router.get("/message/:name",createNewMessage)


module.exports = router