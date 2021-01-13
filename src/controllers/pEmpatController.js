const { addBarang, deleteBarang, editBarang, getListBarang } = require('../services/pEmpatService');
module.exports = controller = {
  postbarang: async (req, res) => {
    const data = {
      kode_barang: req.body.kode_barang,
      nama_barang: req.body.nama_barang,
      harga: req.body.harga,
      stok: req.body.stok,
      deskripsi: req.body.deskripsi,
      image: 'data:image/jpeg;base64,' + req.file.buffer.toString('base64'),
    };
    const query = await addBarang(data);
    if (query) {
      if (!query.code) {
        return res.status(500).json({
          code: 500,
          message: 'Internal server error',
        });
      }
      return res.status(query.code).json(query);
    } else {
      return res.status(500).json({
        code: 500,
        message: 'Internal server error',
      });
    }
  },
  deleteBarangs: async (req, res) => {
    const { id } = req.params;
    const query = await deleteBarang(id);
    if (query) {
      if (!query.code) {
        return res.status(500).json({
          code: 500,
          message: 'Internal server error',
        });
      }
      return res.status(query.code).json(query);
    } else {
      return res.status(500).json({
        code: 500,
        message: 'Internal server error',
      });
    }
  },
  editBarangs: async (req, res) => {
    const { id } = req.params;
    const file = req.file;
    let data;
    if (file) {
      data = {
        kode_barang: req.body.kode_barang,
        nama_barang: req.body.nama_barang,
        harga: req.body.harga,
        stok: req.body.stok,
        deskripsi: req.body.deskripsi,
        image: 'data:image/jpeg;base64,' + file.buffer.toString('base64'),
      };
    } else {
      data = {
        kode_barang: req.body.kode_barang,
        nama_barang: req.body.nama_barang,
        harga: req.body.harga,
        stok: req.body.stok,
        deskripsi: req.body.deskripsi,
      };
    }
    const query = await editBarang(id, data);
    if (query) {
      if (!query.code) {
        return res.status(500).json({
          code: 500,
          message: 'Internal server error',
        });
      }
      return res.status(query.code).json(query);
    } else {
      return res.status(500).json({
        code: 500,
        message: 'Internal server error',
      });
    }
  },
  getBarang: async (req, res) => {
    const query = await getListBarang();
    if (query) {
      if (!query.code) {
        return res.status(500).json({
          code: 500,
          message: 'Internal server error',
        });
      }
      return res.status(query.code).json(query);
    } else {
      return res.status(500).json({
        code: 500,
        message: 'Internal server error',
      });
    }
  },
};
