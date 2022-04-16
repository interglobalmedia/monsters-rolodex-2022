import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Maria'
    }
  }
    changeNameHandler = () => {
      this.setState({
        name: 'George'
      })
    }
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hi {this.state.name}
              {console.log(this.state)}
            </p>
            <button onClick={this.changeNameHandler}>Change name</button>
          </header>
        </div>
      );
    }
}

export default App;
