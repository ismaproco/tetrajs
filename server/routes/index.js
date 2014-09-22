'use strict';

var express = require('express');
var core = require('../bin/core.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


/* GET Start Game */
router.get('/createGame', function(req, res) {

    res.header('Content-Type', 'application/json');

    if( req.query.user )
    {
        var result = {
            token: core.createGame( req.query.user )
        };

        res.write( JSON.stringify( result ) );    
    }
    else
    {
        res.write('{"error":"no user parameter"}');
    }
    
    res.end();
});

/* GET getBoards */

router.get('/getBoards', function(req, res) {
    
    res.header('Content-Type', 'application/json');
    
    if( req.query.token )
    {
        var writeDocuments = function(err, documents){
            if( !err )
            {
                var boardDocument = JSON.stringify( documents );

                res.write( boardDocument );
            }
            else
            {
                res.write ( '{ "error" : ' + err.toString()+ ' }' );
            }

            res.end();
        }

        core.getBoards( req.query.token , writeDocuments );    
    }
    else
    {
        res.write('{"error":"no token parameter"}');
        res.end();
    }
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
