import React, { Component } from 'react';
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


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <form>
            <select>
              <option>- pick a model -</option>
              {Object.keys(this.data).map((key) => 
                <option value='{key}' >{key} ({this.data[key].year})</option>
              )}
            </select>
          </form>

        </header>
      </div>
    );
  }
}

export default App;
