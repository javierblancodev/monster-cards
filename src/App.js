import { Component } from "react";
import "./App.css";

class App extends Component {
  // the constructor is the first method to be called when a component is render
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  // In react we have access to (i.e. we can rewrite) some Component class methods - lifecycle methods
  // These methods indicates when render or redender
  // For example, componentDidMount() renders when a component is mounted (rendered a component into the page) and it is typically used to fetch data required by the component
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
