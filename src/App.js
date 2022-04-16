import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [
        {name: 'Linda', id: 1},
        {name: 'George', id: 2},
        {name: 'Christine', id: 3}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
        ))}
        </div>
    );
  }
}
export default App;
