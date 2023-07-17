const { sequelize } = require("../../db");
const { DataTypes } = require("sequelize");

const Gallery = sequelize.define(
  "gallery",
  {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = { Gallery };
