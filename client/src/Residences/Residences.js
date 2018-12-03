import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import './Residences.css';

class Residences extends Component {
    newResidenceForm = () => {
        if (document.getElementById("newResidenceForm").style.height === "100%") {
            document.getElementById("newResidenceForm").style.height = "0"
        } else {
            document.getElementById("newResidenceForm").style.height = "100%";
        }
    };
    render() {
        return (
            <div className="residencesColumn" >
                <div className="headerAndButton">
                    <h2 className="residencesHeader">Residences</h2>
                    <button onClick={this.newResidenceForm} className="newResidenceFormBtn">Add New Residence</button>
                </div>
                <p className="residencesBody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, tenetur. Quisquam dolor quos minima architecto inventore dolore repudiandae eveniet quasi vero a facilis, iste illum amet commodi quam nulla rem!</p>
            </div>
        );
    }
}


export default Residences;