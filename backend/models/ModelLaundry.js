const { DataTypes } = require('sequelize');
const ConfigDB = require('./../database/ConfigDB.js');
const userDb = require('./ModelUser.js');

const laundryDb = ConfigDB.define(
  'laundry',
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },

    //diklasifikasi jadi dua route nanti (weight/piece)
    typeLaundry: {
      type: DataTypes.STRING,
    },

    userId: {
      type: DataTypes.INTEGER,
    },

    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50],
      },
    },

    phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.TEXT,
    },

    //hanya string penampung data jenis item
    typeItem: {
      type: DataTypes.STRING,
    },
    amountItem: {
      type: DataTypes.INTEGER,
    },

    //harga jenis paket/item
    typeItemPrice: { type: DataTypes.INTEGER },

    //hasil kali jenis dengan banyaknya jumlah item
    totalPrice: { type: DataTypes.INTEGER },

    //hmmm
    ongkir: { type: DataTypes.INTEGER },

    note: {
      type: DataTypes.TEXT,
    },
    statusOrder: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

userDb.hasMany(laundryDb);
laundryDb.belongsTo(userDb, { foreignKey: 'userId', as: 'userData' });

module.exports = laundryDb;