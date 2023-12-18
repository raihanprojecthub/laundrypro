const express = require('express');
const {
  createReport,
  deleteReport,
  getReports,
} = require('../controllers/Report');
const VerifyUser = require('../middleware/VerifyUser');

const ReportRouter = express.Router();

ReportRouter.post('/report', VerifyUser, createReport);
ReportRouter.get('/reports', getReports);
ReportRouter.delete('/report/:uuid', deleteReport);

module.exports = ReportRouter;
