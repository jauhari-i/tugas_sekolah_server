const router = require('express').Router();
const chalTwo = require('../controllers/challengeTwoController');

router.get('/', (req, res) => {
  res.send('Welcome to api tugas sekolah irfan');
});

router.post('/challenge/two/balok', chalTwo.balok);
router.post('/challenge/two/kubus', chalTwo.kubus);
router.post('/challenge/two/kerucut', chalTwo.kerucut);
router.post('/challenge/two/bola', chalTwo.bola);
router.get('/challenge/two/convert/celcius/:heat', chalTwo.celcius);
router.get('/challenge/two/convert/reamur/:heat', chalTwo.reamur);
router.get('/challenge/two/convert/kelvin/:heat', chalTwo.kelvin);
router.get('/challenge/two/convert/fahrenheit/:heat', chalTwo.fahrenheit);
router.get('/challenge/two/convert/decimal/:number', chalTwo.decimal);
router.get('/challenge/two/convert/biner/:number', chalTwo.biner);
router.get('/challenge/two/convert/octal/:number', chalTwo.octal);
router.get('/challenge/two/convert/hexa/:number', chalTwo.hexa);
router.post('/challenge/two/bmi', chalTwo.bmi);

router.use('/praktikum', require('./praktikum'));

module.exports = router;
