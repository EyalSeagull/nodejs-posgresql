const router = require('express').Router();
const dbController = require('../controllers/db-controller');

/* GET quotes listing. */
router.get(
  '/',
  dbController.getMultiple);

/* POST quotes */
router.post(
  '/',
  dbController.create);

module.exports = router;
