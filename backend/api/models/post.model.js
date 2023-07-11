const { sequelize } = require("../../db");
const { DataTypes } = require("sequelize");

const Posts = sequelize.define("posts",
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  { timestamps: false }
);

module.exports = { Posts };
