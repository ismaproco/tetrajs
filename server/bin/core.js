'use strict';

var mongo = require('./mongoHelper');
var Board = require('./Board');
var util = require('./util');
var tetraCollectionName = 'tetra';

//Core Object
function Core()
{

}

// Function that creates the game
// Each token represent a current game per user
// this tokens must be unique
// the game start with a time, a user, a token, and 
// each board that is playing
// a new mongo collection is created with the token
// this collection has all the plays for each one of the 
// boards
Core.prototype.createGame = function createGame(user, callback)
{
	// Get current time in milliseconds
	var time = new Date().getTime()
	// Create unique token with the join of random string
	// and a the time in millis
	var token = util.generateRandomString( 32 ) + time; 

	var doc = {
		time: time,
		token: token,
		board: new Board().initBoard(),
		user: user
	}

	// Saves collection in the db
	if( callback )
	{
		mongo.insertDocument(token,doc, function(err, result)
		{
			callback(err, result);
		});
	}
	else
	{
		mongo.insertDocument( token, doc );	
	}
	

	// return the token
	return token;
}

Core.prototype.getBoards = function getBoards( token, callback )
{
	//get the last inserted id
	var options = { 'limit':1 , 'sort' : [ ['_id','desc'] ] };

	mongo.getDocuments( token, {}, options, function(err, documents){

		if( callback )
		{
			callback( err, documents );
		}
	});
}


// game logic
// A user create a game
// 		the server creates a token, and with the token
// 		creates the mongo collection, with the token as name
//		and an empty board
// the server returns the token.
// TODO: Complete the server logic for the plays


module.exports = new Core();