var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var whistle = require("../models/whistle.js");

router.post("/api/register", function(req, res) {
  console.log("Inserting user information");
  whistle.insertOne(
  ["your_name", "EmergencyContact_name_one","EmergencyContact_email_one",
  "EmergencyContact_name_two", "EmergencyContact_email_two"], 
  [req.body.your_name,req.body.EmergencyContact_name_one, req.body.EmergencyContact_email_one,
  req.body.EmergencyContact_name_two, req.body.EmergencyContact_email_two], 
  function() {
    res.redirect("/");
  });
  console.log("Inserted user information");
});

// Create all our routes and set up logic within those routes where required.
/*
router.get("/", function(req, res) {
  contacts.selectAll(function(data) {
    var hbsObject = {
      contacts: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
*/

console.log("Loaded App Controller.Js");
// Export routes for server.js to use.
module.exports = router;
