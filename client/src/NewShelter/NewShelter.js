import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import './NewShelter.css';

class NewShelter extends Component {
    render() {
        return (
            <div id="newShelterForm" className="closed newShelterForm" >
                <p>NEW SHELTER FORM</p>

            </div>
        );
    }
}


export default NewShelter;