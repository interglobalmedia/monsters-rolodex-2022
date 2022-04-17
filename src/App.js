import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchInputField: ''
    }
    console.log('constructor')
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
    console.log(`componentDidMount`)
  }

  searchInputChangeHandler = (event) => {
    console.log(event)
    event.preventDefault()
    this.setState(() => {
      return {
        searchInputField: event.target.value
      }
    }, () => {
      console.log(this.state)
    })  
  }
 
  render() {
    console.log(`render`)
    const { monsters, searchInputField } = this.state
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchInputField.toLowerCase()))
    console.log(filteredMonsters)
    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="search monsters" onChange={this.searchInputChangeHandler} />
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
        </div>
    );
  }
}
export default App;
