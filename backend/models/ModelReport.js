const { DataTypes } = require('sequelize');
const ConfigDB = require('../database/ConfigDB');
const userDb = require('./ModelUser');

const reportDb = ConfigDB.define('reports', {
  uuid: {
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  reportMessage: {
    type: DataTypes.TEXT,
  },

  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
  },
  fullname: {
    type: DataTypes.STRING,
    validate: {
      len: [3, 50],
    },
  },
});

userDb.hasMany(reportDb);
reportDb.belongsTo(userDb, { foreignKey: 'userId', as: 'userData' });

module.exports = reportDb;
