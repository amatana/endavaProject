const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

router.post('/login', passport.authenticate('local'), (req, res) => {
  if (req.isAuthenticated()) {
    res.send(req.user);
  }
});

module.exports = router;
