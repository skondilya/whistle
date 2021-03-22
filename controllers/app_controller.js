var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var whistle = require("../models/whistle.js");

router.post("/api/register", function(req, res) {
    console.log("Deleting old user profile");
    whistle.deleteAll(function(){
    console.log("Deleted old user profile");
  });

  console.log("Inserting new user profile");
  whistle.insertOne(
    ["your_name", "EmergencyContact_name_one","EmergencyContact_email_one",
    "EmergencyContact_name_two", "EmergencyContact_email_two"], 
    [req.body.your_name,req.body.EmergencyContact_name_one, req.body.EmergencyContact_email_one,
    req.body.EmergencyContact_name_two, req.body.EmergencyContact_email_two], 
    function() {
      console.log("Inserted user information");
      res.end();
    });
});

router.get("/api/contacts", function(req, res) {
  console.log("selecting the user contacts from database");
  whistle.selectAll(function(data){ 
    console.log("Got results from db query: " + data);
    res.json(data);
  });
});

router.get("/map", function(req, res) {
  console.log("selecting the data from database");
  whistle.selectAll(function(data) {
    res.json(data);
    res.render("/map",data);
  });
  console.log(data);
});

console.log("Loaded App Controller.Js");
// Export routes for server.js to use.
module.exports = router;