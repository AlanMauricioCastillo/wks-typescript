"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var index_1 = require("../reducers/index");
var redux_thunk_1 = require("redux-thunk");
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
var store = redux_1.createStore(index_1.reducers, composeEnhancers(redux_1.applyMiddleware(redux_thunk_1["default"])));
exports["default"] = store;
