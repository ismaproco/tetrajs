'use strict';

// A board is a matrix of 20 rows x 10 columns
// A board is represented in a json with each one
// of the cells with an id of c_0_r_0 until c_9_r_19
// Figures can be added to the board and they can be
// the o, i, j, l, s, t, z from tetris
// this figures have unique colors repectively
// cyan, blue, orange, yellow, green, purple, red
// the figures can be rotated based in a central point
// if a line is created the line is removed 
// from the board and will increase in 1 point the 
// score.


// Board object
function Board()
{
	this.board = {};
}

// Prototypes definitions for the Board object
Board.prototype.initBoard= function initBoard(){
	for (var i = 0; i < 10; i++) {
		for(var j = 0; j < 20; j++){
			this.board["c_"+i+"_r_"+j] = 0;
		}
	}

	return this;
};

Board.prototype.getBoard = function getBoard(){
	return this.board;
};


module.exports = Board;