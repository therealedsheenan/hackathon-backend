const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    "username": "root",
    "password": "password",
    "database": "hackers",
    "host": "127.0.0.1",
    "dialect": "mysql",
    dialectOptions: {
      // useUTC: false,
      dateStrings: true,
      typeCast: true
    }
  });

// const Consumption = sequelize.define('consumptions', {
//   valid_from: DataTypes.DATE,
//   valid_to: DataTypes.DATE,
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//   },
//   amount: DataTypes.FLOAT,
//   created_at: DataTypes.DATE,
//   updated_at: DataTypes.DATE,
// }, {
//   freezeTableName: true,
//   timestamps: false,
//   underscored: true,
// });

module.exports = {
  // Consumption,
  sequelize
}
