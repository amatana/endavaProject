const express = require('express');
const router = express.Router();
const Candidate = require('../models/candidate');

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
  Candidate.findByPk(req.params.id)
    .then(candidate => res.send(candidate));
});


module.exports = router;
