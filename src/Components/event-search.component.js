import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default class EventSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            event: {}
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/events/name/' + this.props.match.params.name)
            .then(result => {
                this.setState({ event: result.data });
                console.log(this.state.event);
            })
            .catch(error => console.log("There is some error: ", error));
    }

    render() {
        if (this.state.event.name != null) {
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
                                                <Link className="btn btn-info" to='/events'>Show All Events List</Link>
                                        &nbsp;&nbsp;
                                        &nbsp;&nbsp;
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
        else {
            return (
                <div>
                    <h1>No Event found with the name entered.</h1>
                    <section class="py-5">
                        <div class="container">
                            <h2>Please Try Again with a valid name.</h2>
                            <p class="lead">Check the Event name on the Event List page</p>
                        </div>
                    </section>
                    <section class="py-5">
                        <div class="container">
                        </div>
                    </section>
                    <section class="py-5">
                        <div class="container">
                        </div>
                    </section>
                    <section class="py-5">
                        <div class="container">
                        </div>
                    </section>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            )
        }
    }

}
