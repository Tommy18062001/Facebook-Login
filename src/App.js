import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Article from './components/Article'

class App extends Component {
  render() {
    return(
      <div className="App">
         <Article /> 
          <Login />     
      </div>

    )
  }
}


export default App;