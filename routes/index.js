var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/nocache', function(req, res, next) {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
	res.header('Pragma', 'no-cache');
	res.header('Expires', '0');
  res.render('nocache', { title: 'Nocache' });
});

router.get('/back', function(req, res, next) {
  res.render('back', { title: 'Back' });
});

module.exports = router;
