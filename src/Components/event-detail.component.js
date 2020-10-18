import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default class EventDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            event: {}
        };
    }

    deleteEvent(id) {
        console.log(id);
        axios.delete('http://localhost:3001/events/' + id)
            .then(result => {
                console.log("event deleted with ID: " + id);
                this.props.history.push('/events')
            })
            .catch(error => console.log("There is some error: ", error));
    }

    componentDidMount() {
        axios.get('http://localhost:3001/events/id/' + this.props.match.params.id)
            .then(result => {
                this.setState({ event: result.data });
                console.log(this.state.event);
            })
            .catch(error => console.log("There is some error: ", error));
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                Details for {this.state.event.name}
                            </h3>
                            <br />
                        </div>
                        <div className="panel-body">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>Event ID</th>
                                        <td>{this.state.event._id}</td>
                                    </tr>
                                    <tr>
                                        <th>Event Name</th>
                                        <td>{this.state.event.name}</td>
                                    </tr>
                                    <tr>
                                        <th>Event Content</th>
                                        <td>{this.state.event.content}</td>
                                    </tr>
                                    <tr>
                                        <th>Event Date</th>
                                        <td>{this.state.event.date}</td>
                                    </tr>
                                    <tr>
                                        <th>Event Time</th>
                                        <td>{this.state.event.time}</td>
                                    </tr>
                                    <tr>
                                        <th>Event Location</th>
                                        <td>{this.state.event.location}</td>
                                    </tr>
                                    <tr>
                                        <th>Event Label</th>
                                        <td>{this.state.event.label}</td>
                                    </tr>
                                    <br /><br /><br /><br /><br />
                                    <tr>
                                        <td>
                                            <Link className="btn btn-info" to='/events'>Back to Events List</Link>
                                        &nbsp;&nbsp;
                                        <Link className="btn btn-warning" to={`/event-edit/${this.state.event._id}`}>Edit Event</Link>
                                        &nbsp;&nbsp;
                                        <button onClick={this.deleteEvent.bind(this, this.state.event._id)} className="btn btn-danger">Delete Event</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}