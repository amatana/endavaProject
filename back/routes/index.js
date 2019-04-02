const express = require('express');
const router = express.Router();
const index = require('../models');

const usRouter = require('./usRouter');
const quRouter = require('./quRouter');

router.use('/users', usRouter);
router.use('/questions', quRouter);

module.exports = router;
