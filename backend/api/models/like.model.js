const { sequelize } = require("../../db");
const { DataTypes } = require("sequelize");
const { User } = require("./user.model");
const { Posts } = require("./post.model");

const Like = sequelize.define("like", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});



module.exports = { Like }