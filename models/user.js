const { Sequelize, DataTypes, Model } = require("sequelize");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const sequelize = new Sequelize('postgres://' + process.env.POSTGRES_USERNAME + ':' + process.env.POSTGRES_PASSWORD + '@' + process.env.POSTGRES_DB + '5432');

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    hash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "users", // We need to choose the model name
  }
);

// hash password with bcrypt
User.beforeCreate((user, options) => {
  return bcrypt
    .hash(user.hash, saltRounds)
    .then((hash) => {
      user.hash = hash;
    })
    .catch((err) => {
      console.log(err);
      throw new Error();
    });
});

// prototype method for all users to check password
User.prototype.authenticate = async function (value, callback) {
  await bcrypt.compare(value, this.hash, function (err, same) {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log("authenticate", err, same);
      callback(err, same);
    }
  });
};

// the defined model is the class itself
console.log(User === sequelize.models.User); // true
