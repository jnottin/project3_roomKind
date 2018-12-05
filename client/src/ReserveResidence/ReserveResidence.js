import React, { Component } from "react";
import axios from "axios";
import "./ReserveResidence.css";

class ReserveResidence extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: "",
        email: "",
        arrivalTime: "",
        numberOfBeds: "",
        numberOfDays: ""
      }
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeHandler(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  // submitHandler(e) {
  //   e.preventDefault();
  //   fetch("/messages", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     data: JSON.stringify(this.state.form)
  //   });
  // }

  onSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const { arrivalTime, location, numberOfBeds, numberOfDays } = this.state;

    axios
      .post("/project3roomKind", {
        arrivalTime,
        numberOfBeds,
        numberOfDays
      })
      .then(result => {
        //access the results here....
        console.log(result);
      });
  };


  render() {
    const residenceId = this.props.match.params.id;
    console.log(residenceId)
    // const residence = this.props.list.filter(specificResidence => specificResidence.id === residenceId)

    const { form } = this.state;

    return (
      <div className="form" onSubmit={this.onSubmit}>
        <div className="col">
          <h1>Reserve Residental</h1>

          <div>
            <label>
              Name:
              <input
                type="text"
                name="numberOfDays"
                value={form.name}
                onChange={this.changeHandler}
              />
            </label>
          </div>

          <div>
            <label>
              Email:
              <input
                type="text"
                name="numberOfDays"
                value={form.email}
                onChange={this.changeHandler}
              />
            </label>
          </div>
          <div>
            <label>
              arrivalTime:
              <input
                type="text"
                name="arrivalTime"
                value={form.arrivalTime}
                onChange={this.changeHandler}
              />
            </label>
          </div>

          <div>
            <label>
              Beds Requested:
              <input
                type="text"
                name="numberOfBeds"
                value={form.numberOfBeds}
                onChange={this.changeHandler}
              />
            </label>
          </div>

          <div>
            <label>
              Number of Days:
              <input
                type="text"
                name="numberOfDays"
                value={form.numberOfDays}
                onChange={this.changeHandler}
              />
            </label>
          </div>
          <div>
            <button><a href="/delete/:id">Submit</a></button>
            {/* <button><a href={"/delete/" + residenceId}>Submit</a></button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ReserveResidence;
