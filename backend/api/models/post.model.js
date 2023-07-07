const { sequelize } = require("../../db");
const { Datatypes } = require("sequelize");

const Posts = sequelize.define(
  "posts",
  {
    text: {
      type: Datatypes.STRING,
    },
  },
  { timestamps: false }
);

module.exports = { Posts };
