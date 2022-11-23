const router = require('express').Router();
const authMiddleware = require('../middlewares/authentication');
const dbController = require('../controllers/db-controller');

/* GET quotes listing. */
router.get(
  '/',
  authMiddleware.authenticationMiddleware,
  dbController.getMultiple);

/* POST quotes */
router.post(
  '/',
  authMiddleware.authenticationMiddleware,
  dbController.create);

module.exports = router;
