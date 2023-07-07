const { sequelize } = require('../../db')
const { Datatypes } = require('sequelize')

const User = sequelize.define('user', {
    username: {
        type: Datatypes.STRING,
        allownull: false,
        unique: true
    }, 
    email: {
        type: Datatypes.STRING,
        allownull: false,
        unique: true,
    },
    bdate: {
        type: Datatypes.DATEONLY,
        allownull: false,
        
    },
    password: {
        type: Datatypes.STRING,
        allownull: false
    },
    bio: {
        type: Datatypes.STRING
    },
    location: {
        type: Datatypes.STRING,
    },
    website: {
        type: Datatypes.STRING
    }
},
{
    timestamps: false
})

module.exports = { User }
