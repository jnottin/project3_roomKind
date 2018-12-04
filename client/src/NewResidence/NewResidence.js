import React, { Component } from 'react';
import './NewResidence.css';


class NewResidence extends Component {

    render() {
        return (
            <div id="newResidenceForm" className="closed newResidenceForm" >
                <form className="newBook" onSubmit={this.handleFormSubmit}>
                    <p>
                        <label htmlFor="name">Name Of Residence</label> <br />
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
                        <label htmlFor="numberOfDays">Number of Days</label> <br />
                        <input type="text"
                            name="numberOfDays"
                            // value={this.state.beds}
                            onChange={this.handleInputChange}
                            placeholder="Number of Days" />
                    </p>
                    <p>
                        <label htmlFor="beds">Number of Beds</label> <br />
                        <input type="text"
                            name="beds"
                            // value={this.state.beds}
                            onChange={this.handleInputChange}
                            placeholder="Number of Days" />
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

export default NewResidence;