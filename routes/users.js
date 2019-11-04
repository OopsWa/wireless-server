var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/test', function(req, res, next) {
  var test={
      vib_ampl: 200,
      vib_freq: 50,
      veb_velo: 18,
      data_time: [ 102, 103, 104, 105 ],
      data_ampl: [ 20, 30, 40, 50, 60 ],
      freq_list: [ 10, 20, 30, 40, 50 ],
      freq_ampl: [ 0, 4, 2, 5, 88 ]
  }

    res.send(test);
});
module.exports = router;
