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
  // console.log(req.params);
  Questions.findAll({
    include: [{ model: Tags }],
    where: { area: req.params.area }
  }
  )
    .then(quest => {
      console.log(quest);
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
          // console.log('ACTUALIZAR: ', pepe);
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
  // console.log('area', req.body.area);
  // console.log('question', req.body.content);
  // console.log('tags', req.body.tags);

  Tags.findAll()
    .then(tagsArray => {
      let tagIDsArray = [];
      for (let i = 0; i < req.body.tags.length; i++) {
        for (let j = 0; j < tagsArray.length; j++) {
          if (tagsArray[j].tag === req.body.tags[i]) tagIDsArray.push(tagsArray[j].id);
        }
      }
      Questions.create({
        content: req.body.content,
        area: req.body.area,
        required: req.body.required
      }
      )
        .then(question => {
        // I need to send an array with the tags IDs not names
          question.setTags(tagIDsArray);
          res.send(200);
        })
        .catch(next);
      res.send(200);
    });
});

router.post('/saveFromFile', (req, res) => {
  console.log('--------------------', req.body.questions[1]);
  let arregloPreguntas = req.body.questions;
  let tagArray = [];
  for (let index = 0; index < arregloPreguntas.length; index++) {
    tagArray.push(arregloPreguntas[i].tags);
  }
  Questions.bulkCreate(req.body.questions)
    .then((createdQuestions) => {
      for (let i = 0; i < tagArray.length; i++) {
        promiseArray.push(createdQuestions[i].setTags(array[i]));
      }
      res.send(200);
    });
});

router.post('/create/tags', (req, res) => {
  Tags.create(req.body)
    .then(() => res.send(200));
});

router.get('/test', (req, res) => {
  Questions.findAll(
    {
      include: [{
        model: Tags }
      ] }
  )
    .then(resultado => {
      // console.log('ELEMENTO NRO 5', resultado);
      res.send(resultado);
    });
});
module.exports = router;
