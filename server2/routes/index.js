var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    name: "server 2 is running"
  });
});

module.exports = router;