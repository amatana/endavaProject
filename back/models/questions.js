const S = require('sequelize');
const db = require('../config/db');

const Questions = db.define('questions', {
  content: {
    type: S.TEXT
  },
  area: {
    type: S.STRING
  }
});

module.exports = Questions;
