const router = require('express').Router();
const multer = require('multer');
const uploadImage = multer({});
const validatePegawai = require('./validators/pTgValidator');

const pTiga = require('../controllers/pTigaController');
const pEmpat = require('../controllers/pEmpatController');

router.get('/tiga/pegawai', pTiga.getAll);
router.get('/tiga/pegawai/:id', pTiga.getOne);
router.post('/tiga/pegawai', validatePegawai.addPegawai, pTiga.addPegawai);
router.put('/tiga/pegawai/:id', validatePegawai.editPegawai, pTiga.editPegawai);
router.delete('/tiga/pegawai/:id', pTiga.deletePegawai);

router.get('/empat/barang', pEmpat.getBarang);
router.post('/empat/barang', uploadImage.single('image'), pEmpat.postbarang);
router.put('/empat/barang/:id', uploadImage.single('image', pEmpat.editBarangs));
router.delete('/empat/barang/:id', pEmpat.deleteBarangs);

module.exports = router;
