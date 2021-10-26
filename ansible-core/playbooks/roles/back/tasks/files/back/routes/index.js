var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    title: "Bienvenidos a la demo de ansible",
    msg: "Hello Ansible",
    express: true,
  })
});

module.exports = router;
