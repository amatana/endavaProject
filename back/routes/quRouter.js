const express = require('express');
const router = express.Router();
const Questions = require('../models/questions');
const Tags = require('../models/tags');

router.get('/delete/:id', (req, res) => {
  Questions.findById(req.params.id)
    .then(quest => {
      console.log('BORRAR: ', quest);
      quest.destroy()
        .then(() => res.send(200));
    });
});

router.get('/reqAllQuestions/:area', (req, res) => {
  Questions.findAll({
    where: {
      area: req.params.area }
  })
    .then(quest => {
      res.send(quest);
    });
});

router.get('/tags', (req, res) => {
  Tags.findAll()
    .then(function (tags) {
      res.send(tags);
    });
});

router.post('/edit/:id', (req, res) => {
  Questions.findById(req.params.id)
    .then(question => {
      question.update({ content: req.body.content })
        .then(pepe => {
          res.send(pepe);
          console.log('ACTUALIZAR: ', pepe);
        });
    });
});

// router.get('/:area', (req, res) => {
//   Questions.findAll({
//     where: {
//       area: req.param.area
//     }
//   })
//     .then(quest => res.send(quest));
// })
;

router.post('/create', (req, res, next) => {
  console.log('area', req.body.area);
  console.log('question', req.body.question);
  console.log('tags', req.body.tags);

  Questions.create({
    content: req.body.question,
    area: req.body.area
  }).then(question => {
    // I need to send an array with the tags IDs not names
    question.setTags(req.body.tags);
  })
    .catch(next);
});

router.post('/saveFromFile', (req, res) => {
  console.log("--------------------", req.body.questions);
  let arregloPreguntas= req.body.questions;
  let tagArray= [];
  for(let index = 0 , index < arregloPreguntas.length, index++){
    tagArray.push(arregloPreguntas[i].tags)
  }
  Questions.bulkCreate(req.body.questions)
    .then((createdQuestions) => {
       for(let i=0; i< tagArray.length; i++){
         promiseArray.push( createdQuestions[i].setTags(array[i]))

       }
      res.send(200);
    });
});

router.get('/uuu', (req, res) => {
  console.log('AVERIGUO QUE CHORGA QUEDO');
  Questions.findAll({
    where: {
      area: 'Sistemas' }
  })
    .then(listado => {
      console.log(listado);
      res.send(200);
    });
});
module.exports = router;
