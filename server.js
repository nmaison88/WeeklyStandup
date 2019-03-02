var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: true }))



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


//Read in DB
MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("customers");
  dbo.collection("customers").find({}).toArray( function(err, result) {
 console.log(result);
// db.close();

  });
});


// //Udate in Database
// MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("customers");
//   var myquery = { Company_Name: 'RandomNew Company' };
//   var newvalues = { $set: {Company_Name: 'RandomNew'} };
//   dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     //db.close();
//   });
// });



// //Create/Insert into DB
// MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("customers");
//   var myobj = { Company_Name: "Rando Company" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//    // db.close();
//   });
// });




////Delete from database
// MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
// var dbo = db.db("customers");
// var myquery = { Company_Name: 'Rando Company' };
//   dbo.collection("customers").deleteMany(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//    // db.close();
//   });
// });


  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  })
