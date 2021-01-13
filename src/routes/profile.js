const {
  addProfile,
  deleteProfile,
  editProfile,
  getProfile,
  getProfileById,
} = require('../controllers/profileController');

const router = require('express').Router();

router.get('/', getProfile);
router.get('/:id', getProfileById);
router.post('/', addProfile);
router.put('/:id', editProfile);
router.delete('/:id', deleteProfile);

module.exports = router;
