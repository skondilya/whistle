
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var whistle = {

  insertOne: function(cols, vals, cb) {
    orm.insertOne("contacts", cols, vals, function(res) {
      cb(res);
    });
  },

	selectColumn: function(table,cols,condition,cb) {
    orm.selectAll("contacts", function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("contacts", objColVals, condition, function(res) {
      cb(res);
    });
  }

};

console.log("Loaded Whistle.Js");
// Export the database functions for the controller (catsController.js).
module.exports = whistle;