// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS CONFIGURATION- This sets up the basic properties for our express server
// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = 8080;
// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));
// ROUTER: The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoute")(app);

// Import routes and give the server access to them.
var routes = require("./controllers/app_controller.js");
app.use("/", routes);

// LISTENER: The below code effectively "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
