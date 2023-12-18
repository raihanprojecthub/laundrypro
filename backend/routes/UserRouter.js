const express = require('express');
const {
  deleteUser,
  getAllUsers,
  getUserByUUID,
  editUserData,
  editUserPassword,
  createUser,
} = require('../controllers/User.js');

const UserRouter = express.Router();

UserRouter.post('/user', createUser);
UserRouter.get('/users', getAllUsers);
UserRouter.get('/user/:uuid', getUserByUUID);
UserRouter.patch('/user/:uuid', editUserData);
UserRouter.patch('/user/password/:uuid', editUserPassword);
UserRouter.delete('/user/:uuid', deleteUser);

module.exports = UserRouter;