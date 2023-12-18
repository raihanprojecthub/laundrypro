const { DataTypes } = require('sequelize');
const ConfigDB = require('./../database/ConfigDB');

const userDb = ConfigDB.define(
  'users',
  {
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user',
    },
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 25],
      },
    },
    fullname: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 50],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING,
    },

    address: {
      type: DataTypes.TEXT,
    },
    // gender: {
    //   type: DataTypes.STRING,
    // },
    profileName: {
      type: DataTypes.STRING,
      defaultValue: 'zero.png',
    },
    profileURL: {
      type: DataTypes.STRING,
      defaultValue: 'http://localhost:5000/profiles/zero.png',
    },
  },
  { freezeTableName: true }
);

module.exports = userDb;
