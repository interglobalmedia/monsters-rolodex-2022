import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
    }
  }

  async componentDidMount() {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users`)
      let users = await response.json();
      console.log(users)
      this.setState(() => {
        return {
          monsters: users
        }
      }, () => [
        console.log(this.state)
      ])
    } catch (error) {
      console.log(error)
    }
  }
 
  render() {
    const {monsters} = this.state
    return (
      <div className="App">
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
        </div>
    );
  }
}
export default App;
