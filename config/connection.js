
var mysql = require("mysql");


var connection = mysql.createConnection({
  
  host: "localhost",
  user: "root",
  password: "shreya@1234",
  database: "whistle"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

console.log("Loaded Connection.Js");
// Export connection for our ORM to use.
module.exports = connection;