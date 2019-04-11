const express = require('express');
const router = express.Router();
const Candidate = require('../models/candidate');
const User = require('../models/User');

router.post('/create', (req, res) => {
  console.log('lo que me llego al servidor ', req.body.candidate);

  let candidateData = {
    name: req.body.candidate.name,
    surname: req.body.candidate.surname,
    email: req.body.candidate.email,
    telNumber: req.body.candidate.telNumber,
    expertise: req.body.candidate.expertise,
    url: req.body.candidate.url,
    status: req.body.candidate.status
  };

  console.log(candidateData);

  Candidate.create(candidateData)
    .then(data => res.status(201).send(data))
    .catch(e => res.send({ error: e.errors[0].message }));

  console.log('TAG ID ARRAY: ', req.body.candidate.selectedTags);
});

router.get('/getAll', (req, res) => {
  Candidate.findAll()
    .then(candidates => res.send(candidates));
});

router.get('/getOne/:id', (req, res) => {
  Candidate.findByPk(req.params.id, {
    include: [{ model: User, as: 'interviewerHR' },
      { model: User, as: 'interSIST1' },
      { model: User, as: 'interSIST2' }]
  })
    .then(candidate => {
      res.send(candidate)
      ;
    });
});

// Trae los candidatos asignados al usuario loggeado
router.get('/getMyCandidates/:userId', (req, res) => {
  Candidate.findAll({
    where: {
      interviewerHRId: req.params.userId
    }
  })
    .then(candidates => {
      res.send(candidates)
      ;
    });
});

// Funciones que asignan entrevistadores
router.post('/setUserHR', (req, res) => {
  Candidate.findByPk(req.body.idCandi)
    .then(candidate => {
      candidate.setInterviewerHR(req.body.idUser);
    })
    .then(() => res.sendStatus(200));
});

router.post('/setUserSIST1', (req, res) => {
  Candidate.findByPk(req.body.idCandi)
    .then(candidate => {
      candidate.setInterSIST1(req.body.idUser);
    })
    .then(() => res.sendStatus(200));
});

router.post('/setUserSIST2', (req, res) => {
  Candidate.findByPk(req.body.idCandi)
    .then(candidate => {
      candidate.setInterSIST2(req.body.idUser);
    })
    .then(candidate => res.send(candidate));
});

module.exports = router;
