const router = require('express').Router();
const controller = require('../controllers/bookController');
const validator = require('./validators/BookValidatiors');

// multer config
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './public/img',
  filename: function (req, file, cb) {
    cb(null, 'Books' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 100000000 },
}).single('file');

const jwt = require('jsonwebtoken');

const checkToken = async (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  !token &&
    res.status(403).json({
      msg: 'Login terlebih dahulu',
    });
  await jwt.verify(token, 'tokobuku', (err, decoded) => {
    err &&
      res.status(401).json({
        status: 401,
        msg: 'Token tidak valid, silahkan login kembali',
        err,
      });
    req.decoded = decoded;
    next();
  });
};

router.post('/login', validator.loginUser, controller.login);
// users
router.post('/register/user', validator.registerUser, controller.registerUser);
router.get('/user');
router.put('/edit-profile');
router.put('/change-password');
router.delete('/account/:id');
// admin
router.post('/register/admin', validator.registerUser);
router.get('/dashboard');
router.get('/users');
// book
router.post('/book', [validator.addBook, upload]);
router.put('/book/:id', [validator.editBook, upload]);
router.get('/book');
router.get('/book/:id');
router.delete('/book/:id');
// cart
router.get('/cart/user');
router.get('/cart/:id');
router.put('/cart/:id');
router.delete('/cart/:id');
// transaction
router.post('/checkout/:id');
router.get('/checkout');
router.get('/checkout/user');
router.delete('/checlout/:id');
router.put('/checkout/:id');

module.exports = router;
