const S = require('sequelize');
const db = require('../config/db');

const Answers= db.define('answers', {
    observations: {
      type: S.TEXT,
    },
    punctuation: {
      type: S.INTEGER,
    },
});
  
  module.exports = Answers;
  