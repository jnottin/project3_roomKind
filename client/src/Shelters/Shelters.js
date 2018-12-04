import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Shelters.css";
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
        console.log(res);
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
        <div key={shelters.name} className="sheltersColumn">
          <div className="sheltersBody">
            <h4>{shelters.name}</h4>
            <h4>{shelters.location}</h4>
            <h4>{shelters.beds}</h4>
            <Link to="/reserveShelter">
              <p>ReserveShelter</p>
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

//  {/* <div className="sheltersBody">
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
//     rerum veniam dolor odio itaque fugiat nisi voluptatibus saepe velit
//     delectus excepturi vero dolores, quam optio aliquid, iste molestias
//     modi esse.
//   </p>
//   <Link to="/reserveShelter">
//     <p>Reserve Shelter</p>
//   </Link>
// // </div> */}
export default Shelters;
