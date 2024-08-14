import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Greeting from './components/nxt';
import Welcome from './components/welcome'


class App extends Component {
  render() {
  return (
    <div className="App">
      <Greeting/>
      <Welcome/>
    </div>
  );
}
}
export default App;

