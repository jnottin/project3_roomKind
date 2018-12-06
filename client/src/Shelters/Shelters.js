import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./Shelters.css";
import EditShelter from "../EditShelter/EditShelter";
import ReserveShelter from "../ReserveShelter/ReserveShelter";
import axios from "axios";

class Shelters extends Component {
  constructor() {
    super();
    this.state = {
      shelters: []
    };
  }
  newShelterForm = () => {
    if (document.getElementById("newShelterForm").style.height === "100%") {
      document.getElementById("newShelterForm").style.height = "0";
    } else {
      document.getElementById("newShelterForm").style.height = "100%";
    }
  };
  componentDidMount() {
    axios
      .get("http://localhost:3007/api/roomKind")
      .then(res => {
        this.setState({
          shelters: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const shelters = this.state.shelters.map(shelters => {
      return (
        <div key={shelters._id} className="sheltersColumn">
          <div className="sheltersBody">
            <h4>Shelter Name: {shelters.name}</h4>
            <img className="shelterImage" src={shelters.image} />
            <h4>Location: {shelters.location}</h4>
            <h4>Number of Beds Available: {shelters.beds}</h4>
            <Link to={`/reserveShelter/${shelters._id}`}>
              {/* <Route path="/reserveShelter/:id" exact component={ReserveShelter} /> */}
              <p>ReserveShelter</p>
            </Link>
            <Link to={`/editShelter/${shelters._id}`}>
              <Route
                path={`/editShelter/${shelters._id}`}
                exact
                render={routerprops => (
                  <EditShelter
                    list={this.state.shelters}
                    match={routerprops.match}
                  />
                )}
              />
              <p>Edit or Delete Shelter Listing</p>
            </Link>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h2 className="sheltersHeader">Shelters</h2>
        <button onClick={this.newShelterForm} className="newResidenceFormBtn">
          Add New Shelter
        </button>
        <div>{shelters}</div>
      </div>
    );
  }
}

export default Shelters;
