"use strict";
exports.__esModule = true;
var express_1 = require("express");
var _a = require("./controller/user"), getUser = _a.getUser, postUser = _a.postUser, deleteUser = _a.deleteUser;
var userRoutes = express_1.Router();
userRoutes.get("/", getUser);
userRoutes.post("/", postUser);
userRoutes["delete"]("/:id", deleteUser);
exports["default"] = userRoutes;
