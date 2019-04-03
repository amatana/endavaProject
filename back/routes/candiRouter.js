const express = require('express');
const router = express.Router();
const Candidate = require('../models/candidate');

router.post('/create', (req, res) => {
  console.log('lo que me llego al servidor ', req.body.Candidate);
  Candidate.create(req.body.candidate)
    .then(data => res.status(201).send(data));
});

module.exports = router;