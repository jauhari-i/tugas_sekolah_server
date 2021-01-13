const BookModel = require('../models/BookModels');
const crypt = require('bcryptjs');
const { v4: uuid } = require('uuid');
const jwt = require('jsonwebtoken');

module.exports = services = {
  registerUser: async (data, cb) => {
    try {
      const { User } = BookModel;
      const encPass = await crypt.hash(data.password, 10);
      const user = await User.create({
        uuid: uuid(),
        nama: data.nama,
        email: data.email,
        password: encPass,
      });
      cb(null, {
        status: 201,
        message: 'User telah terdaftar',
        data: {
          user: user,
        },
      });
      if (!user || !encPass) {
        throw {
          status: 500,
          message: 'Internal server error',
        };
      }
    } catch (error) {
      if (error.status) {
        cb(error);
      } else {
        cb({
          status: 500,
          message: 'Internal server error',
        });
      }
    }
  },
  registerAdmin: async (data, cb) => {
    try {
      const { User } = BookModel;
      const encPass = await crypt.hash(data.password);
      const admin = await User.create({
        uuid: uuid(),
        nama: data.nama,
        email: data.email,
        password: encPass,
        isAdmin: 1,
      });
      cb(null, {
        status: 201,
        message: 'Admin telah terdaftar',
        data: {
          admin: admin,
        },
      });
      if (!user || !encPass) {
        throw {
          status: 500,
          message: 'Internal server error',
        };
      }
    } catch (error) {
      if (error.status) {
        cb(error);
      } else {
        cb({
          status: 500,
          message: 'Internal server error',
        });
      }
    }
  },
  loginService: async (data, cb) => {
    try {
      const { User } = BookModel;
      const user = await User.findOne({ email: data.email });
      const dec = await crypt.compare(data.password, user.password);
      const token = jwt.sign(
        {
          sub: user.uuid,
          role: user.isAdmin,
        },
        'tokobuku',
        { expiresIn: '24h' }
      );
      cb(null, {
        status: 200,
        message: 'Login sukses',
        data: {
          token: token,
        },
      });
      if (!dec) {
        throw {
          status: 400,
          message: 'Kata sandi salah',
        };
      }
      if (!user) {
        throw {
          status: 404,
          message: 'User tidak ditemukan',
        };
      }
    } catch (error) {
      console.log(error);
      if (error.status) {
        cb(error);
      } else {
        cb({
          status: 500,
          message: 'Internal server error',
        });
      }
    }
  },
};
