import { Component } from 'react'

class CardList extends Component {
  // the constructor is still present but we do not write it down since we do not need to overwrite with an initial state for example

  // same thing apply to componentDidMount: would run after the render method if we specify it

  render() {
    const {monsters} = this.props

    return (
      <div>
        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    )
  }
}

export default CardList