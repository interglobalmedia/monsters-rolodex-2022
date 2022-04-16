import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: { firstName: 'Maria', lastName: 'Campbell' },
      company: 'IGMN'
    }
  }
    changeNameHandler = () => {
      this.setState({
        name: { firstName: 'George', lastName: 'Clooney' }
      })
    }
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hi, I am {this.state.name.firstName} {this.state.name.lastName}, and I work at {this.state.company}.
              {console.log(this.state)}
            </p>
            <button onClick={this.changeNameHandler}>Change name</button>
          </header>
        </div>
      );
    }
}

export default App;
