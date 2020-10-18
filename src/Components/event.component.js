import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default class Event extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            event:{}
        }
    }

    getEvent() {
        axios.get(`http://localhost:3001/events`)
            .then(result => {
                const eventsList = result.data;
                this.setState({ events: eventsList })
                console.log(this.state.events)
            })
            .catch(error => console.log("There is some error: ", error));
    } 

    componentDidMount() {
        this.getEvent();
    }

    render() {
        return (
            <div>
                <h1>Events List</h1>
                <br/><br/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Event ID</th>
                            <th>Event Name</th>
                            <th>Event Content</th>
                            <th>Event Date</th>
                            <th>Event Time</th>
                            <th>Event Location</th>
                            <th>Event Label</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.events.map((listValue, index) => {
                            return (
                                <tr key={index}>
                                    <td>{listValue._id}</td>
                                    <td>{listValue.name}</td>
                                    <td>{listValue.content}</td>
                                    <td>{listValue.date}</td>
                                    <td>{listValue.time}</td>
                                    <td>{listValue.location}</td>
                                    <td>{listValue.label}</td>
                                    <td>
                                        <Link to={'/event-detail/' + listValue._id}>Manage</Link><br/>
                                        &nbsp;&nbsp;
                                        <Link className="btn btn-warning" to={`/event-edit/${listValue._id}`}>Edit</Link>
                                    </td>
                                </tr>
                            )
                            })}
                    </tbody>
                </table>
                <br/>
                <Link to='/event-add' className="btn btn-success btn-block">Add New Event</Link>
                <br/><br/><br/><br/>
            </div>
        )
    }
}