const User = require('./User');
const Interview = require('./interview');
const Questions = require('./questions');
const Tags = require('./tags');
const Answers = require('./answers');

Interview.belongsTo(User, { as: 'userHR' });
Interview.belongsTo(User, { as: 'userSis1' });
Interview.belongsTo(User, { as: 'userSis2' });

Interview.belongsTo(Answers, { as: 'interviewID' });
Questions.belongsTo(Answers, { as: 'questionsID' });
Questions.belongsToMany(Tags, { through: 'tags-questions' });
Tags.belongsToMany(Questions, { through: 'tags-questions' });

Answers.belongsTo(Questions);

module.exports = {
  User,
  Interview,
  Questions,
  Answers

};
