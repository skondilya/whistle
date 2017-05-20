
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var whistle = {

  insertOne: function(cols, vals, cb) {
    orm.insertOne("contacts", cols, vals, function(res) {
      cb(res);
    });
  },

	selectAll: function(tableinput,cb) {
    orm.selectAll("contacts", function(res) {
      cb(res);
    });
  },
  deleteAll: function(tableinput, cb) {
    orm.deleteAll("contacts",function(res) {
      cb(res);
    });
  }

};

console.log("Loaded Whistle.Js");
// Export the database functions for the controller (catsController.js).
module.exports = whistle;