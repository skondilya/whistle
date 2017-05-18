var postmark = require("postmark");

module.exports = function(app) {

app.get("/api/email", function(req, res) {
// Example request
console.log("server side postmark called");
var client = new postmark.Client("4b847b60-5fd8-424c-a52e-8348fd8d067c");

client.sendEmail({
    "To": "sthakur2017@kellogg.northwestern.edu",
    "Subject": "Test", 
    "TextBody": "Hello from Postmark!"
});

});   

};

