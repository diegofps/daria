import React, { Component } from 'react';

import ItemsListContainer from './ItemsListContainer';
import DropDown from './DropDown';
import logo from '../logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { addItem } from "../actions/items";


class App extends Component {

  data = {
    "Ivel Z3": {
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    "Bally Astrocade": {
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    "Sord M200 Smart Home Computer": {
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    "Commodore 64": {
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  }
  
  constructor(props)
  {
    super(props)
    this.state = {
      data: this.data,
      selected: undefined,
    }
  }
  
  updateSelection = (key, item) =>
  {
    this.setState({
      selected: {
        name: key,
        ...item
      }
    })
  }

  addItem = (evt) => 
  {
    evt.preventDefault()

    if (this.state.selected)
      this.props.addItem(this.state.selected)
    else
      console.log("Missing selected item");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <form>
            <DropDown data={this.data} updateSelection={this.updateSelection}/>
            <input type="submit" onClick={this.addItem} value="Add" name="Add" />
          </form>

          <ItemsListContainer />

        </header>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addItem: item => dispatch(addItem(item))
  };
}

//export default App
export default connect(null, mapDispatchToProps)(App)
