const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

router.post('/login', passport.authenticate('local'), (req, res) => {
  if (req.isAuthenticated()) {
    res.send(req.user);
  }
});

router.post('/create', (req, res) => {
  User.create(req.body.user)
    .then(data => res.status(201).send(data));
});

router.get('/user', (req, res) => {
  res.send(req.user);
});

router.get('/getAll', (req, res) => {
  User.findAll()
    .then(users => res.json(users));
});

module.exports = router;
