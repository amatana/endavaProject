const express = require('express');
const Questions = require('../models/questions');
const Tags = require('../models/tags');

const router = express.Router();

router.get('/delete/:id', (req, res) => {
  Questions.findById(req.params.id)
    .then(quest => {
      quest.destroy()
        .then(() => res.send(200));
    });
});

router.get('/reqAllQuestions/:area', (req, res) => {
  Questions.findAll({
    include: [{ model: Tags }],
    where: { area: req.params.area }
  }
  )
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
  Questions.findByPk(req.params.id)
    .then(question => {
      question.update({ content: req.body.content })
        .then(pepe => {
          res.send(pepe);
        });
    });
});

router.post('/create', (req, res, next) => {
  Tags.findAll()
    .then(tagsArray => {
      let tagIDsArray = [];
      for (let i = 0; i < req.body.tags.length; i++) {
        for (let j = 0; j < tagsArray.length; j++) {
          if (tagsArray[j].tag === req.body.tags[i]) tagIDsArray.push(tagsArray[j].id);
        }
      }
      console.log('=======>', req.body);
      Questions.findOrCreate({ where: {
        content: req.body.content,
        area: req.body.area,
        required: req.body.required
      } }
      )
        .then(([question, created]) => {
          // I need to send an array with the tags IDs not names
          if (created) {
            question.setTags(tagIDsArray);
          }
          res.send(200);
        })
        .catch(next);
    });
});

// router.post('/saveFromFile', (req, res) => {
//   // console.log('--------------------', req.body.questions[1]);
//   let arregloPreguntas = req.body.questions;
//   let tagArray = [];
//   for (let index = 0; index < arregloPreguntas.length; index++) {
//     tagArray.push(arregloPreguntas[index].tags);
//   }
//   Questions.bulkCreate(req.body.questions)
//     .then((createdQuestions) => {
//       for (let i = 0; i < tagArray.length; i++) {
//         promiseArray.push(createdQuestions[i].setTags(array[i]));
//       }
//       res.send(200);
//     });
// });

router.post('/create/tags', (req, res) => {
  Tags.findOrCreate({ where: req.body })
    .then(([tag, created]) => {
      res.send(200);
    });
});

router.get('/test', (req, res) => {
  Questions.findAll(
    {
      include: [{
        model: Tags }
      ] }
  )
    .then(resultado => {
      res.send(resultado);
    });
});
module.exports = router;
