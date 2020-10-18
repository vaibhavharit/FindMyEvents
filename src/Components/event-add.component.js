import React, { Component } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';

export default class EventAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            content: null,
            date: null,
            time: null,
            location: null,
            label: null,
            errors: {},
            eventError: {
                name: "",
                content: "",
                date: "",
                time: "",
                location: "",
                label: ""
            }
        }
    }

    handleSubmit = (event1) => {
        event1.preventDefault();
        if (this.validate()) {
            const event = {
                name: this.state.name,
                content: this.state.content,
                date: this.state.date,
                time: this.state.time,
                location: this.state.location,
                label: this.state.label
            };
            Axios.post('http://localhost:3001/events', event)
                .then(result => {
                    console.log("Successfully added a new Event");
                    this.props.history.push('/events')
                })
                .catch(error => console.log("There is some error: ", error));
        }
    }

    validate() {
        let input = this.state;
        let errors = {};
        let isValid = true;

        if (!input.name) {
            isValid = false;
            errors["name"] = "Please enter a Name/Title for the event.";
        }
        if (!input.content) {
            isValid = false;
            errors["content"] = "Please enter some Content for the event.";
        }
        if (!input.date) {
            isValid = false;
            errors["date"] = "Please enter the Date of the event.";
        }
        if (!input.time) {
            isValid = false;
            errors["time"] = "Please enter the Time of the event.";
        }
        if (!input.location) {
            isValid = false;
            errors["location"] = "Please enter the Location of the event.";
        }
        if (!input.label) {
            isValid = false;
            errors["label"] = "Please enter a Label for the event.";
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    handleChange = (event1) => {
        event1.preventDefault();
        const { name, value } = event1.target;

        let errors2 = this.state.eventError;

        switch (name) {
            case "name":
                if (value.length < 3 && value.length > 0) {
                    errors2.name = "Please enter at least 3 characters"
                }
                else {
                    errors2.name = "";
                }
                break;
            case "content":
                if (value.length < 3 && value.length > 0) {
                    errors2.content = "Please enter at least 3 characters"
                }
                else {
                    errors2.content = "";
                }
                break;
            case "date":
                if (value.length < 10 && value.length > 0) {
                    errors2.date = "Please enter in format DD/MM/YYYY"
                }
                else {
                    errors2.date = "";
                }
                break;
            case "time":
                if (value.length < 3 && value.length > 0) {
                    errors2.time = "Please enter at least 3 characters"
                }
                else {
                    errors2.time = "";
                }
                break;
            case "location":
                if (value.length < 3 && value.length > 0) {
                    errors2.location = "Please enter at least 3 characters"
                }
                else {
                    errors2.location = "";
                }
                break;
            case "label":
                if (value.length < 3 && value.length > 0) {
                    errors2.label = "Please enter at least 3 characters"
                }
                else {
                    errors2.label = "";
                }
                break;
        }
        this.setState({ [name]: value })
        console.log(this.state);
    }

    render() {
        let errors2 = this.state.eventError;
        return (
            <div>
                <h1>Adding a new Event</h1>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Event Name</label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            onChange={this.handleChange} />
                        <div className="text-danger">{this.state.errors.name}</div>
                        {errors2.name.length > 0 && (<span className="error lead text-danger">{errors2.name}</span>)}
                    </div>
                    <div className="form-group">
                        <label>Event Content</label>
                        <input type="text"
                            className="form-control"
                            name="content"
                            onChange={this.handleChange} />
                        <div className="text-danger">{this.state.errors.content}</div>
                        {errors2.content.length > 0 && (<span className="error lead text-danger">{errors2.content}</span>)}
                    </div>
                    <div className="form-group">
                        <label>Event Date</label>
                        <input type="text"
                            className="form-control"
                            name="date"
                            onChange={this.handleChange} />
                        <div className="text-danger">{this.state.errors.date}</div>
                        {errors2.date.length > 0 && (<span className="error lead text-danger">{errors2.date}</span>)}
                    </div>
                    <div className="form-group">
                        <label>Event Time</label>
                        <input type="text"
                            className="form-control"
                            name="time"
                            onChange={this.handleChange} />
                        <div className="text-danger">{this.state.errors.time}</div>
                        {errors2.time.length > 0 && (<span className="error lead text-danger">{errors2.time}</span>)}
                    </div>
                    <div className="form-group">
                        <label>Event Location</label>
                        <input type="text"
                            className="form-control"
                            name="location"
                            onChange={this.handleChange} />
                        <div className="text-danger">{this.state.errors.location}</div>
                        {errors2.location.length > 0 && (<span className="error lead text-danger">{errors2.location}</span>)}
                    </div>
                    <div className="form-group">
                        <label>Event Label</label>
                        <input type="text"
                            className="form-control"
                            name="label"
                            onChange={this.handleChange} />
                        <div className="text-danger">{this.state.errors.label}</div>
                        {errors2.label.length > 0 && (<span className="error lead text-danger">{errors2.label}</span>)}
                    </div>
                    <button type="submit" className="btn btn-secondary">Add</button>
                    &nbsp;&nbsp;
                    <Link className="btn btn-info" to='/events'>Back to Event List</Link>
                    <br /><br /><br /><br />
                </form>
            </div>
        )
    }
}