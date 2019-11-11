var express = require('express');
var router = express.Router();
var db  =   require('../model/db.js');
var newData;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/postVibData', function(req, res, next) {
  var body=req.body;
  console.log(body);
  var value=[
      body.vib_ampl,
     body.vib_freq,
     body.vib_velo,
  ]
    newData=body;
  var sql="INSERT INTO public.vibdata(\"vibAmpl\",\"vibFreq\",\"vibVelo\") VALUES($1,$2,$3) ";
  db.insert(sql,value,function(err,result){
    if(err){
        res.send( {
            message:"error",
            errInfo:err
        });
    }
    else{
        res.send( {
            message:"success",
            errInfo:result
        });
    }
  });
});



router.get('/getVibData/', function(req, res, next) {

var sql ="SELECT * FROM vibdata ORDER BY \"recordTime\" DESC";
db.select(sql,function(err,result){
  if(err){
   res.send( {
       message:"error",
       errInfo:err
   });
  }
  else{
      console.log(newData);
      res.send(newData);
  }
});
});
module.exports = router;
