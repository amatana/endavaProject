const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Candidate = require('../models/candidate');
const User = require('../models/User');
const Tag = require('../models/tags')

router.post('/create', (req, res) => {
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
    include: [{ model: User, as: 'interviewerHR' },
      { model: User, as: 'interSIST1' },
      { model: User, as: 'interSIST2' },
      { model: Tag }]
  })
    .then(candidate => {
      res.send(candidate)
      ;
    });
});

// Trae los candidatos asignados al usuario loggeado
router.get('/getMyCandidates/:userId', (req, res) => {
  const { userId } = req.params;
  if (!userId) {
    res.sendStatus(200);
  } else {
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
  }
});

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

// Funciones que cambian el estado del Candidato
router.put('/changeStatus', (req, res) => {
  Candidate.findByPk(req.body.idCandi)
    .then(candidato => {
      candidato.update({ status: req.body.status });
      res.sendStatus(200);
    });
});

module.exports = router;
