var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//  res.send('respond with a resource-1234');
  res.render('tasks/index', {});
});

router.get('/new', function(req, res, next) {
    res.render('tasks/new', {});
  });
  
module.exports = router;
