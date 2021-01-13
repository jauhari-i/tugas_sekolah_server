const mongoose = require('mongoose');

const BukuSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  kodeBuku: {
    type: String,
    required: true,
  },
  judul: {
    type: String,
    required: true,
  },
  penulis: {
    type: String,
    required: true,
  },
  tahun: {
    type: Number,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
  stok: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },

  created_at: { type: Date, default: Date.now },
  edited_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
});

const CartSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  buku: {
    type: Array,
    default: [],
  },
  userId: {
    type: String,
    unique: true,
    required: true,
  },

  created_at: { type: Date, default: Date.now },
  edited_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
  total: {
    type: Number,
    default: 0,
  },
});

const TransaksiSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  bukus: { type: Array, required: true },
  customer: {
    type: String,
    required: true,
  },
  hargaBeli: {
    type: Number,
    required: true,
  },
  hargaBayar: {
    type: Number,
  },
  created_at: { type: Date, default: Date.now },
  edited_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
});

const UserSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Number,
    required: true,
    default: 0,
  },
  created_at: { type: Date, default: Date.now },
  edited_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null },
  last_login: { type: Date, default: null },
});

const User = mongoose.model('BookUser', UserSchema);
const Transaksi = mongoose.model('BookTransaksi', TransaksiSchema);
const Cart = mongoose.model('BookCart', CartSchema);
const Buku = mongoose.model('BookBuku', BukuSchema);

module.exports = Models = {
  User,
  Transaksi,
  Cart,
  Buku,
};
