import React, { Component } from "react";
import "./ReserveResidence.css";

class ReserveResidence extends Component {
  render() {
    return (
      <form className="form">
        <div className="col">
          <h1>Reserve Residental</h1>

          <div>
            <label>
              Arrival Time:
              <input type="text" name="time" />
            </label>
          </div>
          <div>
            <label>
              Number of Beds:
              <input type="text" name="beds" />
            </label>
          </div>

          <div>
            <label>
              Number of Days:
              <input type="text" name="days" />
            </label>
          </div>
          <div>
            <button className="btn">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default ReserveResidence;
