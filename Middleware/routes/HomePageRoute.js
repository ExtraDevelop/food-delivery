"use strict";
var express = require("express");
var router = express.Router();
var homePageController_1 = require("../controller/homePageController");
router.get('/courses', homePageController_1["default"].home_page);
module.exports = router;
// app.get('/', (req, res) => res.send('Hello World!'));
// // middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })
