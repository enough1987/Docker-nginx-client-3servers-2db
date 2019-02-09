var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  setTimeout(() => {
    res.json({
      name: "server 1 is running very good"
    });
  }, 60000);
});

module.exports = router;
