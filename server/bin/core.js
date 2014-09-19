'use strict';

var mongo = require('./mongoHelper');
var board = require('./Board');
var tetraCollectionName = 'tetra';

// Manage the operation of generate user game tokens
// Each token represent a current game per user
// this tokens must be unique
// the game start with a time, a user, a token, and 
// each board that is playing
// a new mongo collection is created with the token
// this collection has all the plays for each one of the 
// boards

// game logic
// A user create a game
// 		the server creates a token, and with the token
// 		creates the mongo collection, with the token as name
//		and an empty board
// the server returns the token.
// TODO: Complete the server logic for the plays