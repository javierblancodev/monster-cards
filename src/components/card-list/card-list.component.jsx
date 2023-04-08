import { Component } from 'react';
import './card-list.styles.css'

class CardList extends Component {
  // the constructor is still present (and super() called) but we do not write it down since we do not need to overwrite with an initial state for example

  // same thing apply to componentDidMount: would run after the render method if we specify it

  render() {
    const {monsters} = this.props

    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          const {id, name, email} = monster

          return (
            <div className='card-container' key={monster.id}>
              <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} srcset="" />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    )
  }
}

export default CardList