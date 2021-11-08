"use strict";
exports.__esModule = true;
exports.newUserReducer = exports.usersReducer = void 0;
var index_1 = require("../actions/index");
exports.usersReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case index_1.ActionTypes.fetchUsers:
            return action.payload;
        case index_1.ActionTypes.deleteUsers:
            return action.payload;
        default:
            return state;
    }
};
exports.newUserReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case index_1.ActionTypes.newUsers:
            return action.payload;
        default:
            return state;
    }
};
