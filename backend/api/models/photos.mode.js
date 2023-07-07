const { sequelize } = require('../../db')
const { Datatypes } = require('sequelize')

const Photos = sequelize.define('photos', {
    url: {
        type: Datatypes.STRING
    }
},
{timestamps: false})

module.exports = { Photos }