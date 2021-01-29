// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
// var newts = [
//   {
//     routeName: "theNewtalorian",
//     name: "The Newtalorian",
//     role: "Slitherer",
//     age: 2,
//     xp: 2000
//   },
//   {
//     routeName: "newtalot",
//     name: "Sir Newtalot",
//     role: "Knight of the Drowned Table",
//     age: 3,
//     forcePoints: 1200
//   },
//   {
//     routeName: "joeNewten",
//     name: "Joe Newten",
//     role: "President of the United States of Terrestrial and Aquatic Living",
//     age: 4,
//     forcePoints: 1350
//   }
// ];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/myNewtIndex.html"));
});

app.get("/newtHistory", function(req, res){
  res.sendFile(path.join(__dirname, "./public/newtHistory.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/addNewbs.html"));
});

// Displays all characters
// app.get("/api/newts", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/newtMap.html"));
//   // return res.json(newts);
// });

// Displays a single character, or returns false
// app.get("/api/newts/:newt", function(req, res) {
//   var chosen = req.params.newt;

//   console.log(chosen);

//   for (var i = 0; i < newts.length; i++) {
//     if (chosen === newts[i].routeName) {
//       return res.json(newts[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New Characters - takes in JSON input
// app.post("/api/newts", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newNewt = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newNewt.routeName = newNewt.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newNewt);

//   newts.push(newNewt);

//   res.json(newNewt);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
