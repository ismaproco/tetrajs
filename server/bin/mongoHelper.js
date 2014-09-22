'use strict';

var MongoClient = require('mongodb').MongoClient;
var connectionString = 'mongodb://localhost:27017/tetrajs';


function openConnection( callback )
{
	MongoClient.connect(connectionString, function( err, db ) {
        if( callback )
		{
			callback(err, db);	
		}
	});
}

function closeConnection( callback )
{
	db.close( function( err, result ) {
		callback( err , result );
	});	
}


function getDocuments( collectionName, filter, options, callback )
{
    openConnection( function(err, db)
    {
        var collection = db.collection( collectionName );

        // Fetch all results
        collection.find( filter, options ).toArray(function(err, documents) {
            
            db.close();

            if( callback )
            {
                callback(err, documents );
            }
        });    
    });
}

function insertDocument( collectionName, document , callback )
{
    openConnection( function(err, db)
    {
        var collection = db.collection( collectionName );

        collection.insert( document ,function(err, result) {
            db.close();

            if( callback )
            {
                callback(err, result);
            }
        });
    });
}

function removeDocuments( collectionName, filter, options, callback )
{
    openConnection(function( err, db ){
        var collection = db.collection( collectionName );

        collection.remove(filter,options, function(err, removedDocuments){
            db.close();

            if( callback )
            {
                callback( err , removedDocuments );
            }
        })

    });
}

var mongoHelper = {
    openConnection: openConnection,
    getDocuments: getDocuments,
    insertDocument: insertDocument,
    removeDocuments: removeDocuments
}

module.exports = mongoHelper;