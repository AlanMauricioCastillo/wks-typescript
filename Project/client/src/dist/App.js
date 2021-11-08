"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var fetchUsers_1 = require("../src/actions/fetchUsers");
var deleteUsers_1 = require("../src/actions/deleteUsers");
var react_redux_1 = require("react-redux");
var newUsers_1 = require("../src/actions/newUsers");
function App(props) {
    var users = props.users, fetchUsers = props.fetchUsers, deleteUsers = props.deleteUsers, newUsers = props.newUsers;
    var _a = react_1["default"].useState({
        name: "",
        lastName: ""
    }), newUser = _a[0], setNewUser = _a[1];
    react_1.useEffect(function () {
        fetchUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var handleDelete = function (e) {
        e.preventDefault();
        deleteUsers(parseInt(e.target.value, 10));
        fetchUsers();
    };
    var handleChange = function (e) {
        var _a;
        setNewUser(__assign(__assign({}, newUser), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        newUsers(newUser);
        setNewUser({
            name: "",
            lastName: ""
        });
    };
    return (react_1["default"].createElement("div", null,
        "Hello Henrys",
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("button", { onClick: fetchUsers }, "FETCH USERS!"),
            users.map(function (user) {
                return (react_1["default"].createElement("div", { key: user.id },
                    user.id,
                    " ",
                    user.name,
                    react_1["default"].createElement("button", { value: user.id, onClick: function (e) {
                            handleDelete(e);
                        } }, "DELETE")));
            })),
        react_1["default"].createElement("form", { onSubmit: function (e) {
                e.preventDefault();
                handleSubmit(e);
            } },
            react_1["default"].createElement("h3", null, "Create a User"),
            react_1["default"].createElement("p", null,
                react_1["default"].createElement("input", { name: "name", type: "text", placeholder: "Name...", value: newUser.name, onChange: handleChange }),
                react_1["default"].createElement("input", { name: "lastName", type: "text", placeholder: "Last Name...", value: newUser.lastName, onChange: handleChange })),
            react_1["default"].createElement("input", { type: "submit", value: "Create" }))));
}
var mapStateToProps = function (state) {
    return {
        users: state.users
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, { fetchUsers: fetchUsers_1.fetchUsers, deleteUsers: deleteUsers_1.deleteUsers, newUsers: newUsers_1.newUsers })(App);
/////////////////////           classes           //////////////////////
/* interface AppProps {
  title: string;
}

  interface AppState {
  counter: number;
}

class App extends React.Component {
    render() {
        return (
            <div>
        <h3>Henry Workshop</h3>
            </div>
        );
    }
}

export default App; */
