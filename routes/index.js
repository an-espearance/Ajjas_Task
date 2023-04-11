var express = require('express');
var router = express.Router();
// var fs 

// var userSchema = {
//   name:String,
//   email:String
// }

// /* GET home page. *//
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/state',function(req,res,next){
  
})


module.exports = router;
