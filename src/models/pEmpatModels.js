const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  nama_admin: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
});

const usersSchema = new mongoose.Schema({
  nama_users: { type: String },
  email: { type: String },
  alamat: { type: String },
  foto: { type: String },
  username: { type: String },
  password: { type: String },
});

const transaksiSchema = new mongoose.Schema({
  kode_transaksi: { type: String, unique: true },
  id_users: { type: String },
  userData: { type: Object },
  tgl_transaksi: { type: Date, default: Date.now },
});

const detailTransaksi = new mongoose.Schema({
  kode_transaksi: { type: String },
  kode_barang: { type: String },
  barangData: { type: Object },
  jumlah: { type: Number },
  harga_beli: { type: Number },
});

const barangSchema = new mongoose.Schema({
  kode_barang: { type: String },
  nama_barang: { type: String },
  harga: { type: Number },
  stok: { type: Number },
  deskripsi: { type: String },
  image: { type: String },
});

module.exports = models = {
  Admin: mongoose.model('p4admin', adminSchema),
  User: mongoose.model('p4user', usersSchema),
  Barang: mongoose.model('p4barang', barangSchema),
  Transaksi: mongoose.model('p4transaksi', transaksiSchema),
  DTransaksi: mongoose.model('p4dettransaksi', detailTransaksi),
};
