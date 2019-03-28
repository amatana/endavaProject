const User = require('./User');
const Interview = require('./interview');
const Questions = require('./questions');
const Tags = require('./tags');

User.belongsTo(Interview, { as: "userHR"});
User.belongsTo(Interview, { as: "userSis1"});
User.belongsTo(Interview, { as: "userSis2"});

Questions.belongsToMany(Tags, {through: 'tags-questions'})
Tags.belongsToMany(Questions, {through: 'tags-questions'})

module.exports = {
    User,
    Interview
}