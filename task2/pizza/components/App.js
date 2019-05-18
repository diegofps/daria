import React, { Component } from 'react';
import PizzaListContainer from './components/PizzaListContainer'
import PizzaDetailsContainer from './components/PizzaDetailsContainer'
import AddPizzaFormContainer from './components/AddPizzaContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PizzaListContainer />
        <PizzaDetailsContainer />
        <AddPizzaFormContainer />
      </div>
    );
  }
}

export default App;
