const User = require('./User');
const Interview = require('./Interview');
const Answers = require ('./answers')

User.belongsTo(Interview, { as: "userHR"});
User.belongsTo(Interview, { as: "userSis1"});
User.belongsTo(Interview, { as: "userSis2"});


Interview.belongsTo(Answers,{as:'interviewID'})
Questions.belongsTo(Answers,{as:'questionsID'})


module.exports = {
    User,
    Interview,
    Questions,
    Answers
    
    
}