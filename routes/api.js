var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource-1234');
});

router.get('/user_list', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        console.log(docs );
        var param = {"docs": docs };
        res.json( param );
    });
});
/* tasks */
router.get('/tasks_index', function(req, res) {
    var db = req.db;
    var collection = db.get('books');
    var items = [];
    collection.find({},{},function(e,docs){
        docs.forEach( function (item) {
            //toTimeString
            items.push(item);
        });
        var param = {"docs": items };
        res.json(param);
    });
});
router.post('/tasks_new', (req, res) => {
    console.log(req.body.title )
    var db = req.db;
    var obj = req.body;
    var collection = db.get('books');
    collection.insert(obj , function(err, result ) {
        if (err) throw err;
        res.json(req.body);
        db.close();
    });        
}); 
module.exports = router;
