var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', (req, res) =>{
  res.json({
    name: 'Richie Mahfud Ahmed Sambora',
    email: 'richiesambora9029@gmail.com',
    phone: '085933000380',
    address: 'Gang Durian 04 Sambilegi Lor, Depok Sleman DI Yogyakarta'
  })
});

module.exports = router;
