const router = require('express').Router();
const validatePegawai = require('./validators/pTgValidator');

const pTiga = require('../controllers/pTigaController');

router.get('/tiga/pegawai', pTiga.getAll);
router.get('/tiga/pegawai/:id', pTiga.getOne);
router.post('/tiga/pegawai', validatePegawai.addPegawai, pTiga.addPegawai);
router.put('/tiga/pegawai/:id', validatePegawai.editPegawai, pTiga.editPegawai);
router.delete('/tiga/pegawai/:id', pTiga.deletePegawai);

module.exports = router;
