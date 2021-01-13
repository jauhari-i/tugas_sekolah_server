const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  profileId: { type: String },
  noAbsen: { type: Number },
  namaLengkap: { type: String },
  kelas: { type: String },
});

module.exports = Profile = mongoose.model('profilePretest', profileSchema);
