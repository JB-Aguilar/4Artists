const { sequelize } = require("../../db");
const { DataTypes } = require("sequelize");

const Posts = sequelize.define(
  "posts",
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    }
  },
  { timestamps: true }
);

module.exports = { Posts };
