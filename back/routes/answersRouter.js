/* eslint-disable no-undef */
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

router.get('/getSisAnswers/:id', (req, res) => {
  // console.log('+++++++++++++++++++++++++lo q me llega al getSisAnswers', req.params.id);
  Answers.findAll({
    where: {
      interviewId: req.params.id,
      observations: null
    }
  })
    .then(preguntas => {
      let arrayprom = [];
      let arrayPromesas = [];

      preguntas.map(pregunta => {
        arrayPromesas.push(Questions.findByPk(pregunta.questionId));
      });
      Promise.all(arrayPromesas)
        .then(response => {
          response.map(respon => {
            arrayprom.push({
              id: respon.id,
              value: respon.content
            });
          });
          // console.log('++++++++++++++++++++++++++++++++++', arrayprom);
          res.send(arrayprom);
        });
    });
});

function transformToArray (obj) {
  let array = [];
  let value;
  for (i in obj) {
    let key = i.split('-');
    key[1] === 'score' ? value = [Number(key[0]), key[1], Number(obj[i])]
      : value = [Number(key[0]), key[1], (obj[i])];
    array.push(value);
  }
  return array;
}

router.post('/postAnswersSIS', (req, res) => {
  console.log('mellegaaaaaaaaaaaaaaaaaaa al ', req.body);
  let interId = req.body.InterviewSis;
  // console.log(interId);
  delete req.body.InterviewSis;
  // console.log('================================= ', req.body)
  let answerSis = transformToArray(req.body);
  console.log(answer);
  answerSis.map(answer => {
    Answers.findOne({ where: { interviewId: req.body.interviewID } });
  });

  // Answers.findAll({
  //   where: {
  //     interviewId: interId,
  //     observations: null
  //   }
  // }).then(res => console.log(res))
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

// function transformToArray (obj) {
//   let array = [];
//   for (i in obj) {
//     let key = i.split('-');

//     if (key[1] === 'score') {
//       let value = [Number(key[0]), key[1], Number(obj[i])];
//       array.push(value);
//     } else {
//       let value = [Number(key[0]), key[1], (obj[i])];
//       array.push(value);
//     }
//   }
//   return array;
// }
