const { sequelize } = require('./models')

async function main() {
  await sequelize.User.sync({ force: true });
  console.log("The table for the User model was just created!");

  await sequelize.Question.sync({ force: true });
  console.log("The table for the Question model was just created!");

  await sequelize.Game.sync({ force: true });
  console.log("The table for the Game model was just created!");
}

main()
