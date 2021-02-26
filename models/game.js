const { Sequelize, DataTypes, Model } = require("sequelize");
const Question = require("./question.js");
const User = require("./user.js");
const sequelize = new Sequelize('postgres://' + process.env.POSTGRES_USERNAME + ':' + process.env.POSTGRES_PASSWORD + '@' + process.env.POSTGRES_DB + '5432');

class Game extends Model {}

Game.init(
  {
    // Model attributes are defined here
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    winner: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "games", // We need to choose the model name
  }
);

Game.belongsToMany(Question, { through: GameQuestion });
Game.belongsToMany(User, { through: GameUser });

// the defined model is the class itself
console.log(Game === sequelize.models.Game); // true
