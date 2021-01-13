const { check } = require('express-validator');
const MpModel = require('../../models/MpModels');

module.exports = validator = {
  registerUser: [
    check('nama').not().isEmpty().withMessage('Nama tidak boleh kosong'),
    check('email').not().isEmpty().withMessage('Email tidak boleh kosong'),
    check('email').custom((val) => {
      return MpModel.user.findOne({ email: val, verified: true }).then((u) => {
        if (u) {
          return Promise.reject('Email telah dipakai');
        }
      });
    }),
    check('password').not().isEmpty().withMessage('Kata sandi tidak boleh kosong'),
  ],
  registerAlamat: [
    check('nama').not().isEmpty().withMessage('Nama tidak boleh kosong'),
    check('provinsi').not().isEmpty().withMessage('Provinsi tidak boleh kosong'),
    check('kota').not().isEmpty().withMessage('Kota tidak boleh kosong'),
    check('kecamatan').not().isEmpty().withMessage('Kecamatan tidak boleh kosong'),
    check('desa').not().isEmpty().withMessage('Desa tidak boleh kosong'),
    check('kode_pos').not().isEmpty().withMessage('Kode Pos tidak boleh kosong'),
  ],
  registerAdmin: [
    check('nama').not().isEmpty().withMessage('Nama tidak boleh kosong'),
    check('email').not().isEmpty().withMessage('Email tidak boleh kosong'),
    check('email').custom((val) => {
      return MpModel.admin.findOne({ email: val }).then((u) => {
        if (u) {
          return Promise.reject('Email telah dipakai');
        }
      });
    }),
  ],
  registerCategory: [check('nama').not().isEmpty().withMessage('Nama Kategori tidak boleh kosong')],
  registerProduct: [
    check('nama').not().isEmpty().withMessage('Nama Produk tidak boleh kosong'),
    check('category').not().isEmpty().withMessage('Kategori produk tida boleh kosong'),
    check('desc').not().isEmpty().withMessage('Deskripsi Produk tidak boleh kosong'),
    check('price').not().isEmpty().withMessage('Harga produk tidak boleh kosong'),
    check('img').not().isEmpty().withMessage('Gambar produk tidak boleh kosong'),
  ],
};
