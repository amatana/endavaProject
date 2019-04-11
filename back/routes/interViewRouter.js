const express = require('express');

const Interview = require('../models/interview');

const router = express.Router();

router.post('/newInterview', (req, res) => {
  Interview.create(req.body)
    .then(interview => {
      interview.setCandidateID(req.body.candidateId);
      res.send(interview);
    });
});

router.get('/:id', (req, res) => {
  Interview.findByPk(req.params.id)
    .then(interview => {
      console.log('QUE CARANCHO HAY AHI?', interview);
      res.send(interview);
    });
})
;

module.exports = router
;
