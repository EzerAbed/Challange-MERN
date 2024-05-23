const router = require("express").Router()

const{createNewMessage}=require('../controllers/contact')

router.post("/",createNewMessage)


module.exports = router