var express = require('express');
var router = express.Router();
var db  =   require('../model/db.js');
var data_time=[];
var data_ampl=[];
var freq_list=[];
var freq_ampl=[];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/postVibData', function(req, res, next) {
  var body=req.body;
  console.log(value);
  var recordtime=new Date().getTime();

  var value={
      vibAmpl: body.vib_ampl,
      vibAfreq: body.vib_freq,
      vibVelo: body.vib_velo,

  }
});



router.get('/getVibData', function(req, res, next) {

var sql ="SELECT * FROM vibdata ORDER BY recordTime DESC";
db.select(sql,function(err,res){
  if(err){
   res.send( {
     success:1,
     errInfo:err
   });
  }
  else{

  }
});
});
module.exports = router;
