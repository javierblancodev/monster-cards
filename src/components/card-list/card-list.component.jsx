import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
  // the constructor is still present (and super() called) but we do not write it down since we do not need to overwrite with an initial state for example

  // same thing apply to componentDidMount: would run after the render method if we specify it

  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id } = monster;

          return <Card key={id} monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
