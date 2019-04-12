const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Candidate = require('../models/candidate');
const User = require('../models/User');

router.post('/create', (req, res) => {
  console.log('lo que me llego al servidor ', req.body.candidate);
  Candidate.create(req.body.candidate)
    .then(data => res.status(201).send(data))
    .catch(e => res.send({ error: e.errors[0].message }));
});

router.get('/getAll', (req, res) => {
  Candidate.findAll()
    .then(candidates => res.send(candidates));
});

router.get('/getOne/:id', (req, res) => {
  Candidate.findByPk(req.params.id, {
    include: [{ model: User, as: 'interviewerHR' }, { model: User, as: 'interSIST1' }, { model: User, as: 'interSIST2' }]
  })
    .then(candidate => {
      res.send(candidate)
      ;
    });
});

// Trae los candidatos asignados al usuario loggeado
router.get('/getMyCandidates/:userId', (req, res) => {
  const { userId } = req.params;
  Candidate.findAll({
    where: {
      [Sequelize.Op.or]: [{
        interviewerHRId: userId
      }, {
        interSIST1Id: userId
      }, {
        interSIST2Id: userId
      }]
    }
  })
    .then(candidates => {
      res.send(candidates); 
});
});

router.get('/getMyCandidates/:userId', (req, res) => {
  Candidate.findAll({
    where: {
      interviewerHRId: req.params.userId
    }
  })
    .then(candidates => {
      res.send(candidates) 
;});
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

// Funciones que cambian el estado del Candidato
router.put('/changeStatus', (req, res) => {
  console.log('LO QUE MADO AL PUT', req.body)
  Candidate.findByPk(req.body.idCandi)
    .then(candidato => {
      console.log('SOYBEL CANDIDATOOOOOO///', candidato)
      candidato.update({ status: req.body.status })
      res.sendStatus(200)
    })
});

module.exports = router;
