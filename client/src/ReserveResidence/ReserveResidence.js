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
        numberOfDays: "",
      }
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(e) {
    e.preventDefault()
    console.log("hit handleRemove function")
    axios.delete('http://localhost:3007/reserveResidence/' + this.props.match.params._id)
      .then((result) => {
      });
  }

  changeHandler(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }


  render() {
    const residenceId = this.props.match.params._id;
    // const residence = this.props.list.filter(specificResidence => specificResidence.id === residenceId)

    const { form } = this.state;

    return (
      <div className="form" >
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
            {/* <button onClick={this.handleRemove}>Submit</button> */}
            <a href="/"><button onClick={this.handleRemove}>Submit</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default ReserveResidence;
