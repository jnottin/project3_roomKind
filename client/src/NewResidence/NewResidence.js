import React, { Component } from "react";
import axios from "axios";
import "./NewResidence.css";

class NewResidence extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      location: "",
      numberOfDays: "",
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

  handleFormSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3007/project3roomKind/residences", {
        name: this.state.name,
        location: this.state.location,
        numberOfDays: this.state.numberOfDays,
        beds: this.state.beds
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="newResidenceForm" className="closed newResidenceForm">
        <form className="newBook" onSubmit={this.handleFormSubmit}>
          <p>
            <label htmlFor="name">Name Of Residence</label> <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Name of Residence"
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
            <label htmlFor="numberOfDays">Number of Days</label> <br />
            <input
              type="text"
              name="numberOfDays"
              value={this.state.numberOfDays}
              onChange={this.handleInputChange}
              placeholder="Number of Days"
            />
          </p>
          <p>
            <label htmlFor="beds">Number of Beds</label> <br />
            <input
              type="text"
              name="beds"
              value={this.state.beds}
              onChange={this.handleInputChange}
              placeholder="Beds"
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

export default NewResidence;
