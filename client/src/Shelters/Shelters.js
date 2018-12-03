import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import './Shelters.css';

class Shelters extends Component {
    newShelterForm = () => {
        if (document.getElementById("newShelterForm").style.height === "100%") {
            document.getElementById("newShelterForm").style.height = "0"
        } else {
            document.getElementById("newShelterForm").style.height = "100%";
        }
    };
    render() {
        return (
            <div className="sheltersColumn" >
                <h2 className="sheltersHeader">Shelters</h2>
                <div className="navBarItem"><button onClick={this.newShelterForm} className="newResidenceFormBtn">Add New Shelter</button></div>
                <p className="sheltersBody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus rerum veniam dolor odio itaque fugiat nisi voluptatibus saepe velit delectus excepturi vero dolores, quam optio aliquid, iste molestias modi esse.</p>
            </div>
        );
    }
}


export default Shelters;