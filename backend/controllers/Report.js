const { error } = require('console');
const reportDb = require('../models/ModelReport');

const createReport = async (req, res) => {
  try {
    await reportDb.create({
      userId: req.userId,
      reportMessage: req.body.reportMessage,
      email: req.body.email,
      fullname: req.body.fullname,
    });

    res.status(200).json({ msg: 'berhasil menambah laporan' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteReport = async (req, res) => {
  try {
    await reportDb.destroy({
      where: { uuid: req.params.uuid },
    });

    res.status(200).json({ msg: 'berhasil menghapus laporan' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getReports = async (req, res) => {
  try {
    const response = await reportDb.findAll();

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { createReport, deleteReport, getReports };
