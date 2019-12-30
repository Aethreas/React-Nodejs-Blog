var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { 
  res.json([
      {id:0, name: "Alex"},
      {id:1, name: "Tara"},
      {id:2, name: "Bob"}    
  ]);
});

module.exports = router;
