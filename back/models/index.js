const User = require('./User');
const Interview = require('./Interview');
const Answers = require('./answers');
const Questions = require('./questions');

Interview.belongsTo(User, { as: 'userHR' });
Interview.belongsTo(User, { as: 'userSis1' });
Interview.belongsTo(User, { as: 'userSis2' });

Interview.belongsTo(Answers, { as: 'interviewID' });
Questions.belongsTo(Answers, { as: 'questionsID' });

module.exports = {
  User,
  Interview,
  Questions,
  Answers

};
