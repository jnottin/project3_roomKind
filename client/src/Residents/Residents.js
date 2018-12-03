import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import './Residents.css';

class Residents extends Component {
    newResidenceForm = () => {
        if (document.getElementById("newResidenceForm").style.height === "100%") {
            document.getElementById("newResidenceForm").style.height = "0"
        } else {
            document.getElementById("newResidenceForm").style.height = "100%";
        }
    };
    render() {
        return (
            <div className="residentsColumn" >
                <h2 className="residentsHeader">Residents</h2>
                <div className="navBarItem"><button onClick={this.newResidenceForm} className="newResidenceFormBtn">Add New Book (NEW)</button></div>
                <p className="residentsBody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, tenetur. Quisquam dolor quos minima architecto inventore dolore repudiandae eveniet quasi vero a facilis, iste illum amet commodi quam nulla rem!</p>
            </div>
        );
    }
}


export default Residents;