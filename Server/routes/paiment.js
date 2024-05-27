const express = require('express');
const router = express.Router();
const { createPayment} = require('../controllers/paiment');


router.post('/create', createPayment);


module.exports = router;