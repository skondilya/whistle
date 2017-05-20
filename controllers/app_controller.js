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

router.get("/timer", function(req, res) {
  console.log("selecting the data from database");
  whistle.selectAll(function(data) { 
    //res.json(data);
    res.render("/timer",data);
  });
  console.log(data);
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