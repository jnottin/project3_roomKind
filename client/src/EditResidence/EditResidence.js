import React, { Component } from 'react';
// import './HomePage.css';
import axios from "axios";

class EditResidence extends Component {
    constructor() {
        super();
        this.state = {
            residences: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleInputChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleEdit(e) {
        e.preventDefault()
        console.log("hit handleEdit function")
        axios.put('http://localhost:3007/edit/' + this.props.match.params.id)
            .then((result) => {
            });
    }

    handleRemove(e) {
        e.preventDefault()
        console.log("hit handleRemove residence function")
        console.log(this.props.match.params._id)
        axios.delete('http://localhost:3007/deleteResidence/' + this.props.match.params.id)
            .then((result) => {
            });
    }

    componentDidMount() {
        axios
            .get("http://localhost:3007/api/roomKind")
            .then(res => {
                this.setState({
                    residences: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }


    render() {
        const residences = this.state.residences
        console.log(residences)
        const residenceId = this.props.match.params.id;
        const residenceInfo = residences.filter(specificresidence => specificresidence._id === residenceId)
        const residence = residenceInfo[0]
        console.log(residence)

        if (typeof residence != "undefined") {
            return (
                <div>
                    <h2>hello</h2>
                    {/* <h2>{residence.name}</h2> */}

                    {/* <form className="newresidence">
                        <p>
                            <label htmlFor="Name">Name Of residence</label> <br />
                            <input
                                type="text"
                                name="name"
                                onChange={this.handleInputChange}
                                value={this.state.name}
                                // value={residence.name}
                                placeholder={residence.name}
                            />
                        </p>
                        <p>
                            <label htmlFor="location">Location</label> <br />
                            <input
                                type="text"
                                name="location"
                                onChange={this.handleInputChange}
                                value={this.state.location}
                                // value={residence.location}
                                placeholder={residence.location}
                            />
                        </p>
                        <p>
                            <label htmlFor="numberOfDays">Number Of Days</label> <br />
                            <input
                                type="text"
                                name="numberOfDays"
                                // value={residence.numberOfDays}
                                value={this.state.numberOfDays}
                                onChange={this.handleInputChange}
                                placeholder={residence.numberOfDays}
                            />
                        </p>
                        <p>
                            <label htmlFor="beds">Number of Beds</label> <br />
                            <input
                                type="text"
                                name="beds"
                                // value={residence.beds}
                                value={this.state.beds}
                                onChange={this.handleInputChange}
                                placeholder={residence.beds}
                            />
                        </p>
                        <p>
                            <button type="submit" onClick={this.handleEdit}>Done With Change!</button>
                            <button type="submit" onClick={this.handleRemove}>Delete Shelter Post</button>
                        </p>
                    </form> */}
                    {/* <button type="submit" onClick={this.handleRemove}>Delete Shelter Post</button> */}
                </div>
            )


        } else {
            return (
                <h1>order empty</h1>
            )
        }

    }
}


export default EditResidence;