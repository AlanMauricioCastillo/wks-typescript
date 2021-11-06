"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
function App(_a) {
    var title = _a.title;
    var _b = react_1.useState(0), counter = _b[0], setCounter = _b[1];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h3", null,
            "Henry Workshop - ",
            title),
        react_1["default"].createElement("hr", null),
        react_1["default"].createElement("button", { onClick: function () { return setCounter(counter + 1); } }, "Increment"),
        react_1["default"].createElement("button", { onClick: function () { return setCounter(counter - 1); } }, "Decrement"),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("span", null, counter)));
}
exports["default"] = App;
/////////////////////           classes           //////////////////////
/* interface AppProps {
  title: string;
}

  interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
      super(props);
      this.state = {counter: 0};
  }

    onIncrement = (): void => {
        this.setState({counter: this.state.counter + 1});
    };

    onDecrement = (): void => {
        this.setState({counter: this.state.counter - 1});
    };

    render() {
        return (
            <div>
                <h3>Henry Workshop - {this.props.title}</h3>
                <hr></hr>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>
                <br></br>
                <span>{this.state.counter}</span>
            </div>
        );
    }
}

export default App; */
