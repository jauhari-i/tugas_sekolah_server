const { check } = require('express-validator');
const BookModel = require('../../models/BookModels');

module.exports = validator = {
  addBook: [
    check('kodeBuku').not().isEmpty().withMessage('Kode buku tidak boleh kosong'),
    check('kodeBuku').custom((val) => {
      return BookModel.Buku.findOne({ kodeBuku: val }).then((b) => {
        if (b) {
          return Promise.reject('Kode buku telah dipakai');
        }
      });
    }),
    check('judul').not().isEmpty().withMessage('Judul buku tidak boleh kosong'),
    check('penulis').not().isEmpty().withMessage('Penulis tidak boleh kosong'),
    check('tahun').not().isEmpty().withMessage('Tahun tidak boleh kosong'),
    check('harga').not().isEmpty().withMessage('Harga tidak boleh kosong'),
    check('stok').not().isEmpty().withMessage('Stok buku tidak boleh kosong'),
  ],
  editBook: [
    check('kodeBuku').not().isEmpty().withMessage('Kode buku tidak boleh kosong'),
    check('kodeBuku').custom((val) => {
      return BookModel.Buku.findOne({ kodeBuku: val }).then((b) => {
        if (b) {
          return Promise.reject('Kode buku telah dipakai');
        }
      });
    }),
    check('judul').not().isEmpty().withMessage('Judul buku tidak boleh kosong'),
    check('penulis').not().isEmpty().withMessage('Penulis tidak boleh kosong'),
    check('tahun').not().isEmpty().withMessage('Tahun tidak boleh kosong'),
    check('harga').not().isEmpty().withMessage('Harga tidak boleh kosong'),
    check('stok').not().isEmpty().withMessage('Stok buku tidak boleh kosong'),
  ],
  registerUser: [
    check('nama').not().isEmpty().withMessage('Nama tidak boleh kosong'),
    check('email').not().isEmpty().withMessage('Email tidak boleh kosong'),
    check('email').custom((val) => {
      return BookModel.User.findOne({ email: val }).then((u) => {
        if (u) {
          return Promise.reject('Email telah dipakai');
        }
      });
    }),
    check('password').not().isEmpty().withMessage('Kata sandi tidak boleh kosong'),
  ],
  loginUser: [
    check('email').not().isEmpty().withMessage('Email tidak boleh kosong'),
    check('password').not().isEmpty().withMessage('Kata sandi tidak boleh kosong'),
  ],
};
