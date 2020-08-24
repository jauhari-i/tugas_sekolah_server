const Pegawai = require('../models/PTgPegawai');
const { v4: uuid } = require('uuid');

module.exports = services = {
  getAll: async (cb) => {
    try {
      const pegawai = await Pegawai.find({});
      cb(null, {
        status: 200,
        message: 'Get all pegawai sukses!',
        data: {
          pegawai: pegawai.map((p) => ({
            uuid: p.uuid,
            nip: p.nip,
            nama: p.nama,
            alamat: p.alamat,
          })),
        },
      });
    } catch (error) {
      cb({ status: 500, message: 'Internal server error', error: error });
    }
  },
  getOne: async (id, cb) => {
    try {
      const pegawai = await Pegawai.findOne({ uuid: id });
      if (!pegawai) {
        throw {
          status: 404,
          message: 'Pegawai tidak ditemukan',
          data: [],
        };
      }
      cb(null, {
        status: 200,
        message: `Get pegawai id ${id} sukses!`,
        data: {
          pegawai: {
            uuid: pegawai.uuid,
            nip: pegawai.nip,
            nama: pegawai.nama,
            alamat: pegawai.alamat,
          },
        },
      });
    } catch (error) {
      if (error.status) {
        cb(error);
      } else {
        cb({ status: 500, message: 'Internal server error', error: error });
      }
    }
  },
  addPegawai: async (data, cb) => {
    try {
      const pegawai = await Pegawai.create({
        uuid: uuid(),
        nip: data.nip,
        nama: data.nama,
        alamat: data.alamat,
      });
      cb(null, {
        status: 201,
        message: 'Pegawai telah dibuat',
        data: {
          pegawai: {
            uuid: pegawai.uuid,
            nip: pegawai.nip,
            nama: pegawai.nama,
            alamat: pegawai.alamat,
          },
        },
      });
    } catch (error) {
      if (error.message) {
        cb(error);
      } else {
        cb({ status: 500, message: 'Internal server error', error: error });
      }
    }
  },
  editPegawai: async (id, data, cb) => {
    try {
      const pegawai = await Pegawai.findOneAndUpdate(
        { uuid: id },
        {
          nip: data.nip,
          nama: data.nama,
          alamat: data.alamat,
        }
      );
      if (!pegawai) {
        throw {
          status: 404,
          message: 'Pegawai tidak ditemukan',
          data: [],
        };
      }
      cb(null, {
        status: 200,
        message: 'Pegawai telah diperbarui',
      });
    } catch (error) {
      if (error.message) {
        cb(error);
      } else {
        cb({ status: 500, message: 'Internal server error', error: error });
      }
    }
  },
  deletePegawai: async (id, cb) => {
    try {
      const pegawai = await Pegawai.deleteOne({ uuid: id });
      if (!pegawai) {
        throw {
          status: 404,
          message: 'Pegawai tidak ditemukan',
          data: [],
        };
      }
      cb(null, {
        status: 200,
        message: 'Pegawai telah dihapus',
      });
    } catch (error) {
      if (error.message) {
        cb(error);
      } else {
        cb({ status: 500, message: 'Internal server error', error: error });
      }
    }
  },
};
