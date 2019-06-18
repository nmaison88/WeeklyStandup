var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/data", function(req, res) {
  //Read in DB
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("weeklystandup");
    dbo
      .collection("standuptable")
      .find({}, { projection: { _id: 0 } })
      .toArray(function(err, result) {
        console.log(result);
        res.jsonp(result);

        // db.close();
      });
  });
});

app.post("/field", function(req, res) {
  var obj = req.body;
  var val = obj.updatedValue;
  var name = obj.name;
  var lastweek = obj.lastweek;
  var thisweek = obj.thisweek;
  var details = obj.details;
  var query1 = "list." + val + "." + "name";
  var query2 = "list." + val + "." + "lastweek";
  var query3 = "list." + val + "." + "thisweek";
  var query4 = "list." + val + "." + "details";

  console.log("query1:", query1);
  console.log("payload", val, name, lastweek, thisweek, details);
  // //Udate in Database
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("weeklystandup");
    dbo.collection("standuptable").updateOne(
      {},
      {
        $set: { [query1]: name, [query2]: lastweek, [query3]: thisweek, [query4]: details }
        // {"list.$.name":name,"list.$.lastweek":lastweek,"list.$.thisweek":thisweek}
      },
      function(err, res) {
        if (err) throw err;
        // console.log('res',res)
        console.log("1 document updated");
      }
    );
  });
});

app.post("/quote", function(req, res) {
  var obj = req.body;
  console.log(obj);
  res.send(obj);
  // //Udate in Database
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("weeklystandup");
    dbo.collection("standuptable").updateOne(
      {},
      {
        $set: obj
      },
      function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
      }
    );
  });
});

app.post("/assigned", function(req, res) {
  var obj = req.body;
  console.log(obj);
  res.send(obj);
  // //Udate in Database
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("weeklystandup");
    dbo.collection("standuptable").updateOne(
      {},
      {
        $set: obj
      },
      function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
      }
    );
  });
});

app.post("/discuss", function(req, res) {
  var obj = req.body;
  console.log(obj);
  res.send(obj);
  // //Udate in Database
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("weeklystandup");
    dbo.collection("standuptable").updateOne(
      {},
      {
        $set: obj
      },
      function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
      }
    );
  });
});
