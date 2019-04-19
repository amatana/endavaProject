const express = require('express');
const router = express.Router();
const Answers = require('../models/answers');
const Questions = require('../models/questions');
const Interview = require('../models/interview');
router.post('/answersHR', (req, res) => {

  let arrayProm = [];

  Answers.findOne({ where: { interviewId: req.body.interviewID } })
    .then(data => {
      if (!data) {
        for (let i in req.body) {
          if (i !== 'interviewID' && i !== 'submitted') {
            arrayProm.push(
              Answers.create({
                interviewId: Number(req.body.interviewID),
                questionId: Number(i),
                observations: req.body[i],
                answered: true
              }))
            ;
          };
        }
        Promise.all(arrayProm)
          .then(respuesta => res.send(respuesta))
          .catch(err => console.log(err));
      } else { return res.send(data); }
    });
});

router.get('/getHRAnswers/:id', (req, res) => {
  Interview.findAll(
    { where: { id: req.params.id },
      include: [{ model: Questions }] }
  )
    .then(data => {
      var question;
      var answer;
      var arrayPares = [];

      for (let i = 0; i < data.length; i += 1) {
        for (let j = 0; j < data[i].questions.length; j += 1) {
          if (!data[i].questions[j].answers.score) {
            answer = data[i].questions[j].answers.observations;
            question = data[i].questions[j].content;
            arrayPares.push({
              pregunta: question,
              respuesta: answer
            });
          }
        }
      }
      res.send(arrayPares);
    });
});

router.get('/getSistAnswers/:id', (req, res) => {
  Interview.findAll(
    { where: { id: req.params.id },
      include: [{ model: Questions }] }
  )
    .then(data => {
      var question;
      var answer;
      var arrayPares = [];

      for (let i = 0; i < data.length; i += 1) {
        for (let j = 0; j < data[i].questions.length; j += 1) {
          if (data[i].questions[j].answers.score) {
            answer = data[i].questions[j].answers.score;
            question = data[i].questions[j].content;
            arrayPares.push({
              pregunta: question,
              score: answer
            });
          }
        }
      }
      res.send(arrayPares);
    });
});
module.exports = router
;
