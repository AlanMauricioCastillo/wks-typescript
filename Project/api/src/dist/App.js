"use strict";
exports.__esModule = true;
var cookie_parser_1 = require("cookie-parser");
var express_1 = require("express");
var morgan_1 = require("morgan");
var config_1 = require("./lib/config");
var index_1 = require("./routes/index");
var app = express_1["default"]();
var cors = require("cors");
app.use(express_1["default"].urlencoded({ extended: true, limit: "50mb" })); //middleware
app.use(express_1["default"].json({ limit: "50mb" }));
app.use(cookie_parser_1["default"]());
app.use(morgan_1["default"]("dev"));
app.use(cors({
    origin: config_1["default"].cors,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"]
}));
app.use("/api", index_1["default"]);
app.use(function (err, req, res, next) {
    // eslint-disable-line no-unused-vars
    var status = err.status || 500;
    var message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});
exports["default"] = app;
