const { check } = require('express-validator');
const Pegawai = require('../../models/PTgPegawai');

module.exports = validasi = {
  addPegawai: [
    check('nip').not().isEmpty().withMessage('NIP Tidak boleh kosong'),
    check('nip').custom((val) => {
      return Pegawai.findOne({ nip: val }).then((p) => {
        if (p) {
          return Promise.reject('NIP Telah dipakai');
        }
      });
    }),
    check('nama').notEmpty().trim().escape().withMessage('Nama tidak boleh kosong'),
    check('alamat').notEmpty().trim().escape().withMessage('Alamat tidak boleh kosong'),
  ],
  editPegawai: [
    check('nip').not().isEmpty().withMessage('NIP Tidak boleh kosong'),
    check('nama').notEmpty().trim().escape().withMessage('Nama tidak boleh kosong'),
    check('alamat').notEmpty().trim().escape().withMessage('Alamat tidak boleh kosong'),
  ],
};
