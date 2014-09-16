'use strict';

var helper = require('../bin/mongoHelper.js');

describe('Open connection',function(){
	var result = {};

	beforeEach(function(done){
		helper.openConnection(function(err, client){
			result.err = err;
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
