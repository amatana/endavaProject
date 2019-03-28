const User = require('./User');
const Interview = require('./interview');

User.belongsTo(Interview, { as: "userHR"});
User.belongsTo(Interview, { as: "userSis1"});
User.belongsTo(Interview, { as: "userSis2"});

module.exports = {
    User,
    Interview
}