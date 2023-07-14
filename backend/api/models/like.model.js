const { sequelize } = require('../../db')
const { Datatypes } = require('sequelize')

const Likes = sequelize.define(
  "photos",
  {
    user_id: {
      type: Datatypes.INT,
    },
    post_id: {
      type: Datatypes.INT,
    },
  },
  { timestamps: false }
);

module.exports = { Likes }