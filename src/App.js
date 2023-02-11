import { Component } from "react";
import "./App.css";

class App extends Component {
  // the constructor is the first method to be called when a component is render
  constructor() {
    super();
    this.state = {
      name: "Javier",
      company: "J.P Morgan",
    };
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
