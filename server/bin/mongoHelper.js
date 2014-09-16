'use strict';

var MongoClient = require('mongodb').MongoClient;

var connectionString = 'mongodb://localhost/tetrajs';

var mongoclient = new MongoClient( connectionString, {native_parser: true});


function openConnection( callback )
{
	mongoclient.open( function( err, mongoclient ) {
		
        if( callback )
		{
			callback(err, mongoclient);	
		}
	});
}

function closeConnection( callback )
{
	mongoclient.close( function( err, result ) {
		callback( err , result );
	});	
}


function getDocuments( collectionName, filter, callback )
{
    openConnection( function(err, mongoclient)
    {
        var collection = mongoclient.collection( collectionName );

        // Fetch all results
        collection.find(filter).toArray(function(err, documents) {
            
            mongoclient.close();

            if( callback )
            {
                callback( documents );
            }
        });    
    });
}

function insertDocument( collectionName, document , callback )
{
    openConnection( function(err, mongoclient)
    {
        var collection = mongoclient.collection( collectionName );

        collection.insert( document ,function(err, result) {
            mongoclient.close();
            
            if( callback )
            {
                callback(err, result);
            }
        });
    });
}
