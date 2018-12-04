import React, { Component } from "react";
// import "./ListShelter.css"

class ReserveShelter extends Component {
  render() {
    return (
      <form className="Reserve">
        <div className="column">
          <h1>Reserve Shelter</h1>

          <div>
            <label>
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Location:
              <input type="text" name="location" />
            </label>
          </div>

          <div>
            <label>
              Number of Beds:
              <input type="text" name="beds" />
            </label>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </div>
      </form>
    );
  }
}
export default ReserveShelter;
