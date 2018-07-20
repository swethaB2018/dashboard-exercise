/*

This script connects to MongoDB and inserts a new document for a new employee.
This can be enhanced to be used as Create script when a user tries to sign up.

Details of the Mongo DB:
Name of the DB	: mydb
Collection name	: MyEmployees
Field Names		: _id, name, empno, password

*/

var MongoClient = require('mongodb').MongoClient;

// URL to connect to DB. Connected to local DB for now. Need to change it to connect from Auth0.
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  //new employee details
  var myobj = { name:'Emp3', empno:'10003', password:'abc123XYZ_3'};
  
  //Insert the data into DB
  dbo.collection("MyEmployees").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});