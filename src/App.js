import './App.css';
import { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchInputField: ''
    }
  }

  async componentDidMount() {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users`)
      let users = await response.json();
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

  searchInputChangeHandler = (event) => {
    event.preventDefault()
    const searchInputField = event.target.value.toLowerCase()
    this.setState(() => {
      return {
        searchInputField
      }
    }, () => {
      console.log(this.state)
    })
  }
 
  render() {
    const { monsters, searchInputField } = this.state
    const { searchInputChangeHandler } = this
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchInputField)
    })
    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="search monsters" onInput={searchInputChangeHandler} />
        <ul>
          {filteredMonsters.map(monster => (<li key={monster.id}>{monster.name}</li>))}
          </ul>
        </div>
    );
  }
}
export default App;
