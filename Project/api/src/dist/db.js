"use strict";
exports.__esModule = true;
exports.sequelize = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
var config_1 = require("./lib/config");
//config;
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'postgres',
    database: config_1["default"].dbName,
    password: config_1["default"].dbPassword,
    username: config_1["default"].dbUser,
    storage: ':memory:',
    models: [__dirname + '/models']
});
