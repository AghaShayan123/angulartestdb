var express = require('express');  
var router = express.Router();
var connection= require('../model/connection');

router.get('/', function(req, res, next){
 
connection.query('SELECT * FROM tutordata', function (error, results, fields) {
  if (error){
      console.log('Error: '+error);
  } 
  else
  {
      res.send(results);
  }
});
 
});

module.exports = router;