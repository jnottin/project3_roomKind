import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="App" >
                <nav>RoomKind</nav>
            </div>
        );
    }
}


export default NavBar;