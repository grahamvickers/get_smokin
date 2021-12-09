var express = require('express');
var router = express.Router();

/* GET create page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

module.exports = router;
