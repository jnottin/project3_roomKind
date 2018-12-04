import React, { Component } from 'react';
import './NewShelter.css';

class NewShelter extends Component {
    render() {
        return (
            <div id="newShelterForm" className="closed newShelterForm" >
                <form className="newBook" onSubmit={this.handleFormSubmit}>
                    <p>
                        <label htmlFor="Name">Name Of Shelter</label> <br />
                        <input type="text"
                            name="name"
                            // value={this.state.name}
                            onChange={this.handleInputChange}
                            placeholder="Name of Shelter" />
                    </p>
                    <p>
                        <label htmlFor="location">Location</label> <br />
                        <input type="text"
                            name="location"
                            // value={this.state.location}
                            onChange={this.handleInputChange}
                            placeholder="Location" />
                    </p>
                    <p>
                        <label htmlFor="beds">Number of Beds</label> <br />
                        <input type="text"
                            name="beds"
                            // value={this.state.beds}
                            onChange={this.handleInputChange}
                            placeholder="Number of Beds" />
                    </p>
                    <p>
                        <button type="submit">
                            Submit
                        </button>
                    </p>
                </form>

            </div>
        );
    }
}


export default NewShelter;