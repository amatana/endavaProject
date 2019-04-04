const express = require('express');
const router = express.Router();
const index = require('../models');

const usRouter = require('./usRouter');
const quRouter = require('./quRouter');
const candiRouter = require('./candiRouter');

router.use('/users', usRouter);
router.use('/questions', quRouter);
router.use('/candidate', candiRouter);

module.exports = router;
