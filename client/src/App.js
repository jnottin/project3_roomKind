import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar.js";
import NewResidence from "./NewResidence/NewResidence";
import NewShelter from "./NewShelter/NewShelter";
import ReserveResidence from "./ReserveResidence/ReserveResidence";
import HomePage from "./HomePage/HomePage";
import ReserveShelter from "./ReserveShelter/ReserveShelter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <NewShelter />
        <NewResidence />
        <Route path="/reserveResidence" exact component={ReserveResidence} />
        <Route path="/reserveShelter/:id" exact component={ReserveShelter} />
        <Route path="/" exact component={HomePage} />
        <Route
          path="/reserveResidence/:_id"
          exact
          component={ReserveResidence}
        />
      </div>
    );
  }
}
export default App;
