var express = require("express");
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;
app.set("port", port);
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(function (req, res, next) {
    let showTests = req.query.test == "1"
        && app.get("env") != "production";
    res.locals.showTests = showTests;
    next();
});

app.get("/", function (req, res) {
    res.locals.title = "homepage";
    res.render("homepage");
});

app.get("/about", function (req, res) {
    res.locals.title = "about - nodeexpress";
    res.render("about");
});

app.use(function (req, res, next) {
    res.type("text/plain");
    res.status(404);
    res.send("404 - not found");
});
app.use(function (error, req, res, next) {
    res.type("text/plian");
    res.status(404);
    res.send("500 - server error");
});

app.listen(port, function () {
    console.log("express started on http://localhost:" + port);
    console.log("press ctrl+c to terminate.");
});