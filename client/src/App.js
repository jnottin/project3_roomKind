import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar.js';
import Shelters from './Shelters/Shelters.js';
import Residents from './Residents/Residents.js';
import NewResidence from './NewResidence/NewResidence';
import NewShelter from './NewShelter/NewShelter';


class App extends Component {
  render() {
    return (
      <div className="App">
        < NavBar />
        < NewResidence />
        < NewShelter />
        <header className="App-header">
          <div className="column">< Shelters /></div>
          <div className="column">< Residents /></div>
        </header>
      </div>
    );
  }
}

export default App;
