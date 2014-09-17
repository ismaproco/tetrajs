'use strict';

var helper = require('../bin/mongoHelper.js');

describe('Open connection',function(){
	var result = {};

	beforeEach(function(done){
		helper.openConnection(function(err, client){
			result.err = err;
			client.close();
			done();
		});
	});

	it('The connection needs to be open', function() {
		expect(result.err).toEqual(null);
	})

	// Code to Execute after the async spec
    afterEach(function(done) {
      done();
    });

});


describe('Insert Document',function(){
	var result = {};
	
	var board = {
			token:'main_board_1',
			description: 'this is a board'
		};

	beforeEach(function(done){
		helper.insertDocument('boards',board,function(err, internalResult){
			result = internalResult;
			done();
		});
	});

	it('The document is going to be inserted', function() {
		expect(result.err).toEqual(null);
	})

	// Code to Execute after the async spec
    afterEach(function(done) {
      done();
    });

});