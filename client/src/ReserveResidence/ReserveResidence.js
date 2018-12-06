import React, { Component } from "react";
import axios from "axios";
import "./ReserveResidence.css";

class ReserveResidence extends Component {
  constructor() {
    super();
    this.state = {
      residences: [],
      form: {
        name: "",
        email: "",
        arrivalTime: "",
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
    const { name, email, arrivalTime, numberOfBeds, numberOfDays } = this.state;

    // axios
    //   .post("/project3roomKind/residences", {
    //     name,
    //     email,
    //     arrivalTime,
    //     numberOfBeds,
    //     numberOfDays
    //   })
    //   .then(result => {
    //     //access the results here....
    //     console.log(result);
    //   });
  };

  componentDidMount() {
    axios
      .get("http://localhost:3007/api/roomKind/residences")
      .then(res => {
        this.setState({
          residences: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeBeds() {
    this.setState({});
  }
  render() {
    const form = this.state.form;
    const residences = this.state.residences;

    return (
      <form className="form" action="/">
        <div className="col">
          <h1>Reserve Residental</h1>

          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
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
                name="email"
                value={form.email}
                onChange={this.changeHandler}
              />
            </label>
          </div>
          <div>
            <label>
              Arrival Time:
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
            <button
              type="submit"
              onSubmit={
                (this.state.residences.beds = this.state.form.numberOfBeds)
              }
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ReserveResidence;
