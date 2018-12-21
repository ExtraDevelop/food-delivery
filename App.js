"use strict";
exports.__esModule = true;
var express = require("express");
var bodyPaser = require("body-parser");
var path = require("path");
var HomePageRoute = require("./Middleware/routes/HomePageRoute");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    App.prototype.middleware = function () {
        this.express.use(express.static(__dirname));
        this.express.use(bodyPaser.json({ limit: "5mB}))" }));
    };
    App.prototype.routes = function () {
        this.express.use('/home', HomePageRoute);
        this.express.use("/api");
        this.express.use('*', function (req, res) {
            res.sendFile(path.resolve(__dirname, "index.html"));
        });
    };
    return App;
}());
exports["default"] = new App().express;
