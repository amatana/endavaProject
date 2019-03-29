const User = require('./User');
const Interview = require('./interview');

Interview.belongsTo(User, { as: "userHR"});
Interview.belongsTo(User, { as: "userSis1"});
Interview.belongsTo(User, { as: "userSis2"});

module.exports = {
    User,
    Interview
}