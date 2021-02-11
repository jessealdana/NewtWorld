// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var newt = {
  all: function(cb) {
    orm.all("newts", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("newts", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("newts", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(cols, vals, cb) {
    orm.delete("newts", cols, vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burger_Controller.js).
module.exports = newt;