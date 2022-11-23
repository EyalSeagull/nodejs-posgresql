var router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.json({message: 'alive'});
});

module.exports = router;
