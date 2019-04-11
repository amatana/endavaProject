const express = require('express');
const router = express.Router();
const Answers = require('../models/answers');

router.post('/answersHR', (req, res) => {
  console.log('lo que me llega de req body', req.body);
  res.send(req.body);
  // Answers.create(req.body.Answers)
  // console.log(req.body);
});

module.exports = router
;
