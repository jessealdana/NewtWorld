var express = require("express");

var router = express.Router();

// Import the model (newt.js) to use its database functions.
var newt = require("../models/newt.js");

// Create all our routes and set up logic within those routes where required.
router.get("/add", function(req, res) {
  newt.all(function(data) {
    var hbsObject = {
      newts: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/add/newts", function(req, res) {
  console.log(req.body)
  newt.create([
    "newt_name", "newt_role", "newt_age", "newt_xp", "newb"
  ], [
    req.body.name, req.body.role, req.body.age, req.body.xp, req.body.newb
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/add/newts/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  newt.update({
    newb: req.body.newb
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/add/newts/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  newt.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;