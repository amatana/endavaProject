const express = require('express');
const router = express.Router();
const Interview = require('../models/interview');

router.post('/newInterv', (req, res) => {
  Interview.create(req.body)
    .then(interview => {
      interview.setCandidate(req.body.candidateId);
      res.send(interview);
    });
});

module.exports = router
;
