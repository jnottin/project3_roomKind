import React, { Component } from "react";
import axios from "axios";
import "./ReserveResidence.css";

class ReserveResidence extends Component {
  constructor() {
    super();
    this.state = {
      residences: []
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
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
    const residences = this.state.residences
    const residenceId = this.props.match.params._id;
    const residenceInfo = residences.filter(specificResidence => specificResidence._id === residenceId)
    const residence = residenceInfo[0]
    console.log(residence)

    if (typeof residence != "undefined") {
      return (
        <div>
          <h2>{residence.name}</h2>

          <form className="newresidence">
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
            <p>
              <button type="submit" onClick={this.handleEdit}>Done With Change!</button>
              <button type="submit" onClick={this.handleRemove}>Delete residence Post</button>
            </p>
          </form>
        </div>
      )


    } else {
      return (
        <div>
          <h1>order sdfsd empty</h1>
          <button type="submit" onClick={this.handleRemove}>Delete residence Post</button>
        </div>
      )
    }

  }
}

export default ReserveResidence;
