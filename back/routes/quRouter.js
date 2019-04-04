const express = require('express');
const router = express.Router();
const Questions = require('../models/questions');
const Tags = require('../models/tags');

router.get('/', (req, res) => {
  console.log('LLEGASTE A /QUESTIONS');
  res.send(200);
});

router.get('/delete/:id', (req, res) => {
  Questions.findById(req.params.id)
    .then(quest => {
      console.log('BORRAR: ', quest);
      quest.destroy();
      res.send(200);
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

router.get('tags', (req, res) => {
  Tags.findAll()
    .then(function (tags) {
      res.send(tags);
    });
});

module.exports = router;
