const { sequelize } = require('../../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
      allownull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allownull: false,
      unique: true,
    },
    bdate: {
      type: DataTypes.DATEONLY,
      allownull: false,
    },
    password: {
      type: DataTypes.STRING,
      allownull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    bio: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { User }
