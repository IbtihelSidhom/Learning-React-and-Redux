import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ItemList extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.items.map(item => <li key={item.id}>{item.value}</li>)}
      </ul>
    );
  }
}


class App extends Component {

  state = {
    items: []
  };

  nextItemId = 0;

  makeItem() {
    return {
      id: this.nextItemId++,
      value: Math.random()
    };
  }


  //The right way: copy the existing items and add a new one
  addItemImmutably = () => {
    this.setState({
      items: [...this.state.items, this.makeItem()]
    });
  }


  //The wrong way: mutate items and set it back
  addItemMutably = () => {
    this.state.items.push(this.makeItem());
    this.setState({ items: this.state.items });
  }

  render() {
    return (
      <div>
        <button onClick={this.addItemImmutably}> 
          Add item immutably (good) 
        </button>
        <button onClick={this.addItemMutably}> 
          Add item mutably (bad) 
        </button>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}



export default App;
