import React, { Component } from "react";
import "./NewShelter.css";
import axios from "axios";

class NewShelter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      location: "",
      beds: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  random() {
    console.log("random");
  }

  handleFormSubmit(event) {
    document.getElementById("newShelterForm").style.height = "0";
    event.preventDefault();
    axios
      .post("http://localhost:3007/project3roomKind", {
        name: this.state.name,
        location: this.state.location,
        beds: this.state.beds
      })
      .then(res => {
        console.log("hello");
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div id="newShelterForm" className="closed newShelterForm">
        <form className="newShelter" onSubmit={this.handleFormSubmit}>
          <p>
            <label htmlFor="Name">Name Of Shelter</label> <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Name of Shelter"
            />
          </p>
          <p>
            <label htmlFor="location">Location</label> <br />
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleInputChange}
              placeholder="Location"
            />
          </p>
          <p>
            <label htmlFor="beds">Number of Beds</label> <br />
            <input
              type="text"
              name="beds"
              value={this.state.beds}
              onChange={this.handleInputChange}
              placeholder="Number of Beds"
            />
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

export default NewShelter;
