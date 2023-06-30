const { DataTypes } = require("sequelize");
const sequelize = require("../models/index");
const examModel = require("../models/ExamModel");
const User = require("./UserModel");
const Exam = require("../models/ExamModel");

const Result = sequelize.define(
  "Results",
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      required: true,
      primaryKey: true,
    },
    studentId: {
      type: DataTypes.INTEGER,
      required: true,
    },
    examId: {
      type: DataTypes.INTEGER,
      References: {
        model: examModel,
        key: "id",
      },
    },
    score: {
      type: DataTypes.STRING,
      required: true,
    },
  },
  {
    tableName: "Results",
  }
);


Result.belongsTo(User, { foreignKey: 'studentId', as: 'student' });
Result.belongsTo(Exam, { foreignKey: 'examId', as: 'exam' });

// Exam.hasMany(Result,{foreignKey:'examId'});
// Result.belongsTo(Exam,{foreignKey:'examId'});

Result.sequelize.sync({ force: false }).then(() => console.log("reSync Done"));

module.exports = Result;
