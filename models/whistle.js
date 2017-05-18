
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var whistle = {

  insertOne: function(cols, vals, cb) {
    orm.insertOne("contacts", cols, vals, function(res) {
      cb(res);
    });
  }

};


// Export the database functions for the controller (catsController.js).
module.exports = whistle;