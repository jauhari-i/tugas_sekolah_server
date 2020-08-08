const mongoose = require('mongoose');

const pegawaiSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  nip: {
    type: Number,
    required: true,
  },
  nama: {
    type: String,
  },
  alamat: {
    type: String,
  },
});

module.exports = Pegawai = mongoose.model('ptigapegawai', pegawaiSchema);
