import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar.js';
import Shelters from './Shelters/Shelters.js';
import Residences from './Residences/Residences.js';
import NewResidence from './NewResidence/NewResidence';
import NewShelter from './NewShelter/NewShelter';
import ReserveResidence from './ReserveResidence/ReserveResidence';


class App extends Component {
  render() {
    return (
      <div className="App">
        < NavBar />
        < NewShelter />
        < NewResidence />
        <header className="App-header">
          <div className="column">< Shelters /></div>
          <div className="column">< Residences /></div>
        </header>
      </div>
    );
  }
}

export default App;
