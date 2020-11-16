const { Barang } = require('../models/pEmpatModels');

module.exports = services = {
  addBarang: async (data) => {
    try {
      const barang = await Barang.create(data);
      if (barang) {
        return {
          code: 201,
          message: 'Barang added',
          data: {
            _id: barang._id,
          },
        };
      } else {
        throw {
          code: 500,
          message: 'Internal server error',
        };
      }
    } catch (error) {
      return error;
    }
  },
  editBarang: async (id, data) => {
    try {
      const barangData = await Barang.findById(id);
      if (!barangData) {
        throw {
          code: 404,
          message: 'Barang tidak ditemukan',
        };
      } else {
        const updataBarang = await Barang.updateOne({ _id: barangData._id }, data);
        if (updataBarang) {
          return {
            code: 200,
            message: 'Barang diupdate',
          };
        } else {
          throw {
            code: 500,
            message: 'Internal server error',
          };
        }
      }
    } catch (error) {
      return error;
    }
  },
  deleteBarang: async (id) => {
    try {
      const deleteBarang = await Barang.findByIdAndDelete(id);
      if (deleteBarang) {
        return {
          code: 200,
          message: 'Barang deleted',
        };
      } else {
        throw {
          code: 500,
          message: 'Internal server error',
        };
      }
    } catch (error) {
      return error;
    }
  },
  getListBarang: async () => {
    try {
      const barang = await Barang.find();
      return {
        code: 200,
        message: 'Barang list',
        data: {
          barang,
          count: barang.length,
        },
      };
    } catch (error) {
      return error;
    }
  },
};
