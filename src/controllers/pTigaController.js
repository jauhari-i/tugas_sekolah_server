const service = require('../services/pTigaService');
const { validationResult } = require('express-validator');

module.exports = controller = {
  getAll: async (req, res) => {
    await service.getAll((err, result) => {
      err && res.status(err.status).json(err);
      res.status(result.status).json(result);
    });
  },
  getOne: async (req, res) => {
    const id = req.params.id;
    await service.getOne(id, (err, result) => {
      err && res.status(err.status).json(err);
      res.status(result.status).json(result);
    });
  },
  addPegawai: async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const data = {
      nip: req.body.nip,
      nama: req.body.nama,
      alamat: req.body.alamat,
    };
    await service.addPegawai(data, (err, result) => {
      err && res.status(err.status).json(err);
      res.status(result.status).json(result);
    });
  },
  editPegawai: async (req, res) => {
    const id = req.params.id;
    const data = {
      nip: req.body.nip,
      nama: req.body.nama,
      alamat: req.body.alamat,
    };
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    await service.editPegawai(id, data, (err, result) => {
      console.log(result);
      err && res.status(err.status).json(err);
      res.status(result.status).json(result);
    });
  },
  deletePegawai: async (req, res) => {
    const id = req.params.id;
    await service.deletePegawai(id, (err, result) => {
      err && res.status(err.status).json(err);
      res.status(result.status).json(result);
    });
  },
};
