var express = require('express'), 
    app = express(),
    MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/s2', function(err, db) {
    if(err) throw err;
    
    app.set('view engine', 'jade')
    app.set('views', __dirname + '/views');
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.static('public/'))

    app.get("/", function (req, res) {
        res.render('index');
    });

    app.listen(3000);
    console.log('Express server listening on port 3000');
});
