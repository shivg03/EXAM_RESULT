const { DataTypes } = require("sequelize");
const sequelize = require("../models/index");

const Exam = sequelize.define(
  "Exams",
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      required: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    date: {
      type: DataTypes.STRING,
      required: true,
    },
  },
  {
    tableName: "Exams",
  }
);
Exam.sequelize.sync({ force: false }).then(() => console.log("reSync Done"));

module.exports = Exam;
