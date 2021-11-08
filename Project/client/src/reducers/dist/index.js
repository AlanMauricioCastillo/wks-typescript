"use strict";
exports.__esModule = true;
exports.reducers = void 0;
var redux_1 = require("redux");
var users_1 = require("./users");
exports.reducers = redux_1.combineReducers({
    users: users_1.usersReducer,
    newUsers: users_1.newUserReducer
});
