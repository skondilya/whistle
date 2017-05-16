// DEPENDENCIES: We need to include the path package to get the correct file path for our html
var path = require("path");

// ROUTING
module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content

  app.get("/whistle", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/main.html"));
  });

    app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/about.html"));
  });

      app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/login.html"));
  });

  app.get("/contact", function(req, res) {
res.sendFile(path.join(__dirname, "/../public/contact.html"));
});


        app.get("/map", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/map.html"));
  });

          app.get("/timer", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/timer.html"));
  });

  // // If no matching route is found default to home
  // app.use(function(req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/home.html"));
  // });
};
