import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom'
import './HomePage.css';
import Shelters from '../Shelters/Shelters.js';
import Residences from '../Residences/Residences.js';

class HomePage extends Component {
    render() {
        return (
            <div className="homePage" >
                <div className="column">< Shelters /></div>
                <div className="column">< Residences /></div>
            </div >
        );
    }
}


export default HomePage;