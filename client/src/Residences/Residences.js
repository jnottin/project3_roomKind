import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Residences.css";
import axios from "axios";

class Residences extends Component {
  constructor() {
    super();
    this.state = {
      residences: []
    };
  }
  newResidenceForm = () => {
    if (document.getElementById("newResidenceForm").style.height === "100%") {
      document.getElementById("newResidenceForm").style.height = "0";
    } else {
      document.getElementById("newResidenceForm").style.height = "100%";
    }
  };

  componentDidMount() {
    axios
      .get("http://localhost:3007/api/roomKind/residences")
      .then(res => {
        console.log(res);
        this.setState({
          residences: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const residences = this.state.residences.map(residences => {
      return (
        <div key={residences._id} className="residencesColumn">
          <div className="residencesBody">
            <h4>Name: {residences.name}</h4>
            <h4>Location: {residences.location}</h4>
            <h4>Days: {residences.numberOfDays}</h4>
            <h4>Beds: {residences.beds}</h4>
            <Link to={"/reserveResidence/" + residences._id}>
              <p>ReserveResident</p>
            </Link>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h2 className="residencesHeader">Residences</h2>
        <button onClick={this.newResidenceForm} className="newResidenceFormBtn">
          Add New Resident
        </button>
        <div>{residences}</div>
      </div>
    );
  }
}

export default Residences;
