const service = require('../services/bookService');

module.exports = controller = {
  registerUser: async (req, res) => {
    const data = {
      nama: req.body.nama,
      email: req.body.email,
      password: req.body.password,
    };
    await service.registerUser(data, (err, result) => {
      err && res.status(err.status).json(err);
      res.status(result.status).json(result);
    });
  },
  registerAdmin: async (req, res) => {
    const data = {
      nama: req.body.nama,
      email: req.body.email,
      password: req.body.password,
    };
    await service.registerAdmin(data, (err, result) => {
      err && res.status(err.status).json(err);
      res.status(result.status).json(result);
    });
  },
  login: async (req, res) => {
    const data = {
      email: req.body.email,
      password: req.body.password,
    };
    await service.loginService(data, (err, result) => {
      err && res.status(err.status).json(err);
      res.status(result.status).json(result);
    });
  },
};
