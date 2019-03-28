const S = require('sequelize');
const db = require('../config/db');

const Preguntas = db.define('questions', {
    contenido: {
        type: S.TEXT,
    }
})

module.exports = Preguntas