const S = require('sequelize');
<<<<<<< HEAD
const db = require('../config/db');
=======
const db = require('../config/db.js');
>>>>>>> 46531f18221efe7738cff75621d86eb4bd668dc7

const Answers = db.define('answers', {
  observations: {
    type: S.TEXT
  },
  punctuation: {
    type: S.INTEGER
  }
});

module.exports = Answers;
