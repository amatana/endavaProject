const express = require('express');
const router = express.Router();
const Tags = require('../models/tags');

router.post('/create', function (req, res) {
  let tag = req.body.tag;
  Tags.create({ tag })
    .then(() => res.send(202));
});

router.get('/retrieve', function (req, res) {
  Tags.findAll()
    .then((tags) => {
      res.send(tags);
    });
});

module.exports = router;
