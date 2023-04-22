import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  // useState is the simplest hook we can use to manage the local state when working with functional components
  // it gives back an array of two variables (the value that stores a particular piece of state and a method to set this to a new value) that can be destructured as follows
  // Opposite to class components, the local state is not deal as a whole object but with its individual values
  const [searchField, setSearchfield] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchFieldSring = e.target.value.toLowerCase();
    setSearchfield(searchFieldSring);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rodolex</h1>

      <SearchBox
        className="monster-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monster"
      ></SearchBox>

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   // the constructor is the first method to be called when a component is render
//   constructor() {
//     super();

//     // Initiate the state
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };

//     console.log('constructor');
//   }

//   // In react we have access to (i.e. we can rewrite) some Component class methods - lifecycle methods
//   // These methods indicates when render or redender
//   // For example, componentDidMount() renders when a component is mounted (rendered a component into the page), but not rerendered for example after the state changes, and it is typically used to fetch data required by the component
//   componentDidMount() {
//     console.log('componentDidMount');
//
//   }
//   // So the flow is: 1. constructor, render, componentDidMount, render

//   // it is good practice to have functions that get called on an event listener and does not change declared out of the render method
//   // the reason is that this way it is initialised just once, when the component is created, and not everytime that the
//   // component rerenders (in case that we pass the function as a anonymous function to the event listener) - bad performance
//

//   render() {
//     console.log('render');

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//

//
//   }
// }

export default App;
