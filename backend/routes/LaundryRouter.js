const express = require('express');
const {
  createLaundry,
  getLaundryByPiece,
  getLaundryByWeight,
  getLaundryUserByPiece,
  getLaundryUserByWeight,
  getLaundryByUUID,
  editLaundry,
  deleteLaundry,
} = require('../controllers/Laundry');
const VerifyUser = require('../middleware/VerifyUser');

const LaundryRouter = express.Router();

LaundryRouter.post('/laundry', VerifyUser, createLaundry);
LaundryRouter.get('/laundry-piece', getLaundryByPiece);
LaundryRouter.get('/laundry-weight', getLaundryByWeight);
LaundryRouter.get('/my-laundry-piece',VerifyUser, getLaundryUserByPiece);
LaundryRouter.get('/my-laundry-weight',VerifyUser, getLaundryUserByWeight);
LaundryRouter.get('/laundry/:uuid', getLaundryByUUID);
LaundryRouter.patch('/laundry/:uuid', editLaundry);
LaundryRouter.delete('/laundry/:uuid', deleteLaundry);

module.exports = LaundryRouter;
