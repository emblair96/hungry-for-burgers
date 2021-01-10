const connection = require("./app/config/connection");
var express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

console.log(__dirname + "/public")

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./app/controllers/burgers_controller.js");

app.use(routes);
// require("./app/routes/api-routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});