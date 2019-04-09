const express = require('express');
const router = express.Router();
const Candidate = require('../models/candidate');
const User = require('../models/User');

router.post('/create', (req, res) => {
  Candidate.create(req.body.candidate)
    .then(data => res.status(201).send(data));
});

router.get('/getAll', (req, res) => {
  Candidate.findAll()
    .then(candidates => res.send(candidates));
});

router.get('/getOne/:id', (req, res) => {
  Candidate.findByPk(req.params.id, {
    include: [{ model: User, as: 'interviewerHR' }]
  })
    .then(candidate => {
      res.send(candidate)
      ;
    });
});

router.get('/getMyCandidates/:userId', (req, res) => {
  Candidate.findAll({
    where: {
      userHRId: req.params.userId
    }
  });
});

router.post('/setUserHR', (req, res) => {
  Candidate.findByPk(req.body.idCandi)
    .then(candidate => {
      console.log(')=======', candidate);
      console.log('PUTPOOOOOOOO', req.body);
      candidate.setInterviewerHR(req.body.idUser);
    });
});

router.post('/setUserSIST1', (req, res) => {
  Candidate.findByPk(req.body.idCandi)
    .then(candidate => {
      console.log(')=======', candidate);
      console.log('PUTPOOOOOOOO', req.body);
      candidate.setInterviewerHR(req.body.idUser);
    });
});

module.exports = router;
