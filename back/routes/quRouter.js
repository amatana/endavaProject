const express = require('express');
const router = express.Router();
const Questions = require('../models/questions');

router.get('/:area', (req, res) => {
  Questions.findAll({
    where: {
      area: req.param.area
    }
  })
    .then(quest => res.send(quest));
})
;

module.exports = router;
