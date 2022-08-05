var express = require('express');
var router = express.Router();

router.get('/', (req, res) =>{
    res.json({
    projectName : 'Picasso Hotels - Landing Page',
    date: '01-01-2020',
    img: '/img/project-01.jpg',
    description: 'lorem ipsum alcantara',
    })
  });

module.exports = router;