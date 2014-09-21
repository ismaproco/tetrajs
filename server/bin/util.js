'use strict';

var util = {};

/*
	Generates a random string with a length of the specified parameter
*/

util.generateRandomString = function randomString( charLength )
{
    var text = "";
    var possible = 	'ABCDEFGHIJKLMNOPQRSTUVWXYZabcde'+
    				'fghijklmnopqrstuvwxyz0123456789';

    for( var i=0; i < charLength; i++ )
    {
        text += possible.charAt( 
        			Math.floor( Math.random() * possible.length ) );
    }

    return text;
}

module.exports = util;