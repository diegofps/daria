import React, { Component } from 'react';
import DropDown from './dropdown';
import logo from './logo.svg';
import './App.css';


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

  updateSelection(key, item)
  {
    console.log(key)
    console.log(item)

    this.setState({
      selected: {
        key: key,
        item: item
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <form>
            <DropDown data={this.data} updateSelection={(a,b) => this.updateSelection(a,b)}/>
          </form>

        </header>
      </div>
    );
  }
}

export default App;
