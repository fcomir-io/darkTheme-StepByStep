import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Dark.css";
import ThemeContext from "./context/ThemeContext";

class App extends React.Component {
  // To consume the nearest current value of that Context type using 'this.context'
  static contextType = ThemeContext;

  render() {
    console.log(this.context);

    return (
      <div className="App">
        <header
          className={this.context.dark ? "dark App-header" : "App-header"}
        >
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br />
          <button
            className={
              this.context.dark ? "dark Toggle-button" : "Toggle-button"
            }
            onClick={this.context.toggleDark}
          >
            {this.context.dark ? "Toggle to Light mode" : "Toggle to Dark mode"}
          </button>
          <br />
          <h1
            className={
              this.context.dark ? "dark App-h1" : "App-h1"
            }
          >
            Extra Component very easy to add and theme
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
