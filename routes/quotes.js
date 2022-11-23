const router = require('express').Router();
import dbController from '../controllers/db-controller';

/* GET quotes listing. */
router.get(
  '/',
  dbController.getMultiple);

/* POST quotes */
router.post(
  '/',
  dbController.create);

module.exports = router;
