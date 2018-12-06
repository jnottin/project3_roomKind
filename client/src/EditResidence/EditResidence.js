import React, { Component } from "react";
// import './HomePage.css';
import axios from "axios";
import "./EditResidence.css";

class EditResidence extends Component {
  constructor() {
    super();
    this.state = {
      residences: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleRemove.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  handleEdit(e) {
    e.preventDefault();
    axios
      .put("http://localhost:3007/editResidence/" + this.props.match.params.id)
      .then(result => {});
  }

  handleRemove(e) {
    e.preventDefault();
    axios
      .delete(
        "http://localhost:3007/deleteResidence/" + this.props.match.params.id
      )
      .then(result => {});
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

  render() {
    const residences = this.state.residences;
    const residenceId = this.props.match.params.id;
    const residenceInfo = residences.filter(
      specificResidence => specificResidence._id === residenceId
    );
    const residence = residenceInfo[0];
    console.log(residence);

    if (typeof residence != "undefined") {
      return (
        <form className="newresidence">
          <div className="colform">
            <h1>{residence.name}</h1>

            <div>
              <p>
                <label htmlFor="Name">Name Of residence</label> <br />
                <input
                  type="text"
                  name="name"
                  onChange={this.handleInputChange}
                  value={this.state.name}
                  // value={residence.name}
                  placeholder={residence.name}
                />
              </p>
            </div>

            <div>
              <p>
                <label htmlFor="location">Location</label> <br />
                <input
                  type="text"
                  name="location"
                  onChange={this.handleInputChange}
                  value={this.state.location}
                  // value={residence.location}
                  placeholder={residence.location}
                />
              </p>
            </div>

            <div>
              <p>
                <label htmlFor="beds">Number of Beds</label> <br />
                <input
                  type="text"
                  name="beds"
                  // value={residence.beds}
                  value={this.state.beds}
                  onChange={this.handleInputChange}
                  placeholder={residence.beds}
                />
              </p>
            </div>

            <div>
              <p>
                <button type="submit" onClick={this.handleEdit}>
                  Done With Change!
                </button>
                <button type="submit" onClick={this.handleRemove}>
                  Delete residence Post
                </button>
              </p>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <div>
          <h1>order sdfsd empty</h1>
          <button type="submit" onClick={this.handleRemove}>
            Delete residence Post
          </button>
        </div>
      );
    }
  }
}

export default EditResidence;
