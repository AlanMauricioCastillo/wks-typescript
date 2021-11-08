"use strict";
exports.__esModule = true;
var User = require("../../models/User").User;
var getUser = function (req, res, next) {
    User.findAll()
        .then(function (users) {
        res.send(users);
    })["catch"](function (error) { return next(error); });
};
var postUser = function (req, res, next) {
    var user = req.body;
    User.create(user)
        .then(function (createdUser) {
        res.send(createdUser);
    })["catch"](function (error) { return next(error); });
};
var deleteUser = function (req, res, next) {
    var id = req.params.id;
    User.findByPk(id)
        .then(function (userToDelete) {
        console.log(userToDelete);
        userToDelete
            .destroy()
            .then(function () {
            User.findAll()
                .then(function (users) {
                res.send(users);
            })["catch"](function (error) { return next(error); });
        })["catch"](function (error) { return next(error); });
    })["catch"](function (error) { return next(error); });
};
module.exports = {
    getUser: getUser,
    postUser: postUser,
    deleteUser: deleteUser
};
