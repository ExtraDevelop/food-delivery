var express = require('express'); // *  as express from "express";
var app = express();
var port = 3000;
// import App from './App';
// import * as serviceWorker from './serviceWorker';
app.get('/', function (req, res) { return res.send('Hello World!'); });
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
