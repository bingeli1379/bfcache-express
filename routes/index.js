var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/nocache', function(req, res, next) {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
	res.header('Pragma', 'no-cache');
	res.header('Expires', '0');
  res.render('nocache');
});

router.get('/back', function(req, res, next) {
  res.render('back');
});

module.exports = router;
