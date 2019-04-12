const express = require('express');
const router = express.Router();
const Answers = require('../models/answers');

router.post('/answersHR', (req, res) => {
  console.log(req.body);

  let arrayProm = [];

  Answers.findOne({ where: { interviewId: req.body.interviewID } })
    .then(data => {
      if (!data) {
        for (let i in req.body) {
          if (i !== 'interviewID') {
            arrayProm.push(
              Answers.create({
                interviewId: Number(req.body.interviewID),
                questionId: Number(i),
                observations: req.body[i]
              }))
            ;
          };
        }
        Promise.all(arrayProm)
          .then(respuesta => res.send(respuesta))
          .catch(err => console.log(err));
      } else { return res.send(200); }
    });
});

module.exports = router
;
