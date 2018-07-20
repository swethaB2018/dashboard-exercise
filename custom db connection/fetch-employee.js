/*

This script connects to MongoDB and fetches the details of a given employee. 
This can be enhanced to be used as Login script for Auth0 to connect to external DB and authenticate an employee/user.

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
  //empno='10001' provided as input for qyerying the details.
  var query = { empno: "10001" };
  
  //Fetch the particular employee record.
  dbo.collection("MyEmployees").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});