const User = require('./User');
const Interview = require('./interview');
const Questions = require('./questions');
const Tags = require('./tags');
const Answers = require('./answers');
const Candidate = require('./candidate');

// Relacion entre Candidatos y Usuarios que lo entrevistarán
Candidate.belongsTo(User, { as: 'interviewerHR' });
Candidate.belongsTo(User, { as: 'interSIST1' });
Candidate.belongsTo(User, { as: 'interSIST2' });
// Relación entre candidato y su entrevista
Interview.belongsTo(Candidate, { as: 'candidate' });

// Relaciones entre Preguntas y Tags
Questions.belongsToMany(Tags, { through: 'tags-questions' });
Tags.belongsToMany(Questions, { through: 'tags-questions' });

// Relaciones entre candidatos y tags
Candidate.belongsToMany(Tags, { through: 'candidate_tags' });
Tags.belongsToMany(Candidate, { through: 'candidate_tags' });

// Relación entre Entrevistas y Preguntas que se harán/hicieron en la misma.
Interview.belongsToMany(Questions, { through: Answers });
Questions.belongsToMany(Interview, { through: Answers });

module.exports = {
  User,
  Interview,
  Questions,
  Answers

};
