const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize('postgres://' + process.env.POSTGRES_USERNAME + ':' + process.env.POSTGRES_PASSWORD + '@' + process.env.POSTGRES_DB + '5432');

class Question extends Model {}

Question.init(
  {
    // Model attributes are defined here
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "questions", // We need to choose the model name
  }
);

// the defined model is the class itself
console.log(Question === sequelize.models.Question); // true
