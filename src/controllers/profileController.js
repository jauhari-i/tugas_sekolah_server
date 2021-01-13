const { async } = require('validate.js');
const profile = require('../services/profile');

const { getProfile, getProfileById, addProfile, editProfile, deleteProfile } = profile;

module.exports = controller = {
  getProfile: async (req, res) => {
    const query = await getProfile();
    if (query) {
      res.status(query.status).json(query);
    } else {
      res.status(500).send('Internal server error');
    }
  },
  getProfileById: async (req, res) => {
    const { id } = req.params;
    const query = await getProfileById(id);
    if (query) {
      res.status(query.status).json(query);
    } else {
      res.status(500).send('Internal server error');
    }
  },
  addProfile: async (req, res) => {
    const { noAbsen, namaLengkap, kelas } = req.body;
    if (!noAbsen || !namaLengkap || !kelas) {
      return res.status(400).json({
        message: 'Please fill all data',
      });
    }
    const query = await addProfile({ noAbsen, namaLengkap, kelas });
    if (query) {
      res.status(query.status).json(query);
    } else {
      res.status(500).send('Internal server error');
    }
  },
  editProfile: async (req, res) => {
    const { id } = req.params;
    const { noAbsen, namaLengkap, kelas } = req.body;
    if (!noAbsen || !namaLengkap || !kelas) {
      return res.status(400).json({
        message: 'Please fill all data',
      });
    }
    const query = await editProfile(id, { noAbsen, namaLengkap, kelas });
    if (query) {
      res.status(query.status).json(query);
    } else {
      res.status(500).send('Internal server error');
    }
  },
  deleteProfile: async (req, res) => {
    const { id } = req.params;
    const query = await deleteProfile(id);
    if (query) {
      res.status(query.status).json(query);
    } else {
      res.status(500).send('Internal server error');
    }
  },
};
