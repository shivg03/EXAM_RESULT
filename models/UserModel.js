module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        required: true,
      },
      password: {
        type: DataTypes.STRING,
        required: true,
      },
      type: {
        type: DataTypes.STRING,
        enum: ["teacher", "student"],
        required: true,
      },
    },
    {
      tableName: "Users",
    }
  );
  return User;
};
