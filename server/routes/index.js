var express = require('express');
var core = require('../bin/core.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


/* GET Start Game */
router.get('/createGame', function(req, res) {
    var result = {
        token: core.createGame( req.user )
    };

  res.write( JSON.stringify( result ) );
  res.end();
});

/* GET getBoards */

router.get('/getBoards', function(req, res) {
  
});

/* GET generateFigure */

router.get('/generateFigure', function(req, res) {
  
});

/* GET moveFigure */

router.get('/moveFigure', function(req, res) {
  
});

/* GET getToken */

router.get('/getToken', function(req, res) {
  
});


module.exports = router;
