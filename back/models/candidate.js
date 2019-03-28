const S = require("sequelize");
const db = require("../config/db")

const Candidate = db.define("candidate", {
    name: {
        type: S.STRING,
    },

    surname: {
        type: S.STRING,

    },

    email: {
        type: S.STRING,
        unique: true,
        validate: {
            isEmail: true,
        }
    },

    telNumber: {
        type: S.INTEGER,

    },

    expertise: {
        type: S.TEXT,

    },

    url: {
        type: S.STRING,
        validate: {
            isUrl: true,
        }

    },

    status: {
        type: S.STRING,
        
    },
},{
    getterMethods: {
      fullName() {
        return this.name + ' ' + this.surname;
      }
    },
})

module.exports = Candidate