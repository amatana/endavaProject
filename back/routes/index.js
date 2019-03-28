const express = require('express');
const router = express.Router();
const index = require('../models')

const usRouter = require('./usRouter')

router.use('/users', usRouter)

module.exports = router;
