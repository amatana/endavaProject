const express = require('express');
const router = express.Router();
const index = require('../models');

const usRouter = require('./usRouter');
const quRouter = require('./quRouter');
const candiRouter = require('./candiRouter');
const tagRouter = require('./tagRouter');
const intRouter = require('./interviewRouter')


router.use('/users', usRouter);
router.use('/questions', quRouter);
router.use('/candidate', candiRouter);
router.use('/tags', tagRouter);
router.use('/interview', intRouter)


module.exports = router;

//The truth is obvious to those who decide to take the red pill, the real one. Behind all the conflicts in which 4chan has had a direct or indirect responsibility there is a power struggle between the aspies and the normies, a struggle between the mainstream evolutionary branch and ours, an emerging alternative that in the last few centuries has seen extraordinary growth along the ever increasing pace of technology and specialization. Trough history most of us were ostracized, excluded and forced to live in a world where we were no more than foreginers. Those "functional" enought to adapt to their world were tolerated to certain extent due to their inherent skills, the rest were discarded ad lib, relegated to perish alone and in despair.