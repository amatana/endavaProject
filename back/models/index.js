import User = require('./User');
import Interview = require('./Interview');

User.belongsTo(Interview, { as: "userHR"});
User.belongsTo(Interview, { as: "userSis1"});
User.belongsTo(Interview, { as: "userSis2"});