import React, { Component } from "react";
import axios from "axios";
import "./ReserveResidence.css";

class ReserveResidence extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        arrivalTime: "",
        location: "",
        numberOfBeds: "",
        numberOfDays: ""
      }
    };
    this.changeHandler = this.changeHandler.bind(this);
    // this.submitHandler = this.submitHandler.bind(this);
  }
  changeHandler(e) {
    e.persist();
    let store = this.state;
    store.form[e.target.name] = e.target.value;
    this.setState(store);
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
    const { form } = this.state;

    return (
      <form className="form" onSubmit={this.onSubmit}>
        <div className="col">
          <h1>Reserve Residental</h1>

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
              Number of Beds:
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
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default ReserveResidence;
