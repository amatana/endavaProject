const express = require('express');
const router = express.Router();
const Questions = require('../models/questions');
const Tags = require('../models/tags');

router.get('/:area', (req, res) => {
  Questions.findAll({
    where: {
      area: req.param.area
    }
  })
    .then(quest => res.send(quest));
})
;

router.get('tags', (req, res) => {
  Tags.findAll()
    .then(function (tags) {
      res.send(tags);
    });
});

module.exports = router;
