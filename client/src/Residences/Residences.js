import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./Residences.css";
import axios from "axios";
import ReserveResidence from "../ReserveResidence/ReserveResidence";
import NewResidence from "../NewResidence/NewResidence";

class Residences extends Component {
  constructor() {
    super();
    this.state = {
      residences: []
    };
    this.handleRemove = this.handleRemove.bind(this);
  }
  newResidenceForm = () => {
    if (document.getElementById("newResidenceForm").style.height === "100%") {
      document.getElementById("newResidenceForm").style.height = "0";
    } else {
      document.getElementById("newResidenceForm").style.height = "100%";
    }
  };

  handleRemove = residence => {
    // e.prevexntDefault()
    console.log("hit handleRemove function")
    axios.delete('http://localhost:3007/reserveResidence/' + residence)
      .then((result) => {
      });
  }

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

  handleUpdate(e) {
    e.preventDefault()
    console.log("hit handleUpdate function")
    axios.put('http://localhost:3007/update/' + this.residences._id)
      .then((result) => {
      });
  }

  // handleFormSubmit(event) {
  //   event.preventDefault();
  //   axios
  //     .post("http://localhost:3007/project3roomKind/residences", {
  //       name: this.state.name,
  //       location: this.state.location,
  //       numberOfDays: this.state.numberOfDays,
  //       beds: this.state.beds
  //     })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render() {
    const residences = this.state.residences.map(residences => {
      return (
        <div key={residences._id} className="residencesColumn">
          <div className="residencesBody">
            <h4>{residences.name}</h4>
            <h4>{residences.location}</h4>
            <h4>{residences.numberOfDays}</h4>
            <h4>{residences.beds}</h4>
            <Link to={"/reserveResidence/" + residences._id}>
              <p>ReserveResident</p>
              <Route path={"/reserveResidence/" + residences._id} exact
                render={(routerprops) => <ReserveResidence list={this.state.residences} match={routerprops.match} />}
              />
            </Link>
            {/* <NewResidence createResidence={this.handleFormSubmit} /> */}
            <a href="/"><button onClick={this.handleRemove}>Delete</button></a>


          </div>
        </div>
      );
    });

    return (
      <div>
        <h2 className="residencesHeader">Residences</h2>
        <button onClick={this.newResidenceForm} className="newResidenceFormBtn">
          Add New Residence
        </button>
        <div>{residences}</div>

      </div>
    );
  }
}

export default Residences;
