"use strict";

exports.__esModule = true;

var express_1 = require("express");

var User = require("../models/User");

var router = express_1.Router();
router.get('/', function (req, res, next) {
  User.findAll().then(function (users) {
    res.send(users);
  })["catch"](function (error) {
    return next(error);
  });
});
router.post('/', function (req, res, next) {
  var user = req.body;
  User.create(user).then(function (createdUser) {
    res.send(createdUser);
  })["catch"](function (error) {
    return next(error);
  });
});
exports["default"] = router;