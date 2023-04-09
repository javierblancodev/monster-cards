import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  // the constructor is the first method to be called when a component is render
  constructor() {
    super();

    // Initiate the state
    this.state = {
      monsters: [],
      searchField: '',
    };

    console.log('constructor');
  }

  // In react we have access to (i.e. we can rewrite) some Component class methods - lifecycle methods
  // These methods indicates when render or redender
  // For example, componentDidMount() renders when a component is mounted (rendered a component into the page), but not rerendered for example after the state changes, and it is typically used to fetch data required by the component
  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
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
  // So the flow is: 1. constructor, render, componentDidMount, render

  // it is good practice to have functions that get called on an event listener and does not change declared out of the render method
  // the reason is that this way it is initialised just once, when the component is created, and not everytime that the
  // component rerenders (in case that we pass the function as a anonymous function to the event listener) - bad performance
  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log('render');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().startsWith(searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monster Rodolex</h1>

        <SearchBox
          className="monster-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search monster"
        ></SearchBox>

        {/* Recall components render (react update the dom) only after the state is changed to a new object or after props are changed */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
