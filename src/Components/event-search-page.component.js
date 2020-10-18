import React, { Component } from 'react';
import { Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";


export default class SearchPage extends Component {

    state = {
        searchText: "",
        searchId: ""
    };

    handleSearchInput = event => {
        this.setState({
            searchText: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <section class="py-5">
                    <div class="container">
                        <h1>Search Event by its Name</h1>
                        <p class="lead">Enter the name of an existing event to search.</p>
                        {/* <p>With this event manager API, you can add / udpate / delete / search your events according to your needs. 
                            A quick and fast way to organize and manage all your events at a single place.  
                        </p> */}
                    </div>
                </section>
                <div>
                    <Form inline>
                        <FormControl
                            onChange={this.handleSearchInput}
                            value={this.state.searchText}
                            type="text"
                            placeholder="Enter the name of the Event"
                            className="form-control w-100"
                        />
                        <br /><br /><br />
                        <Link className="btn btn-info" to={`/event-search/${this.state.searchText}`}>Search Event by Name</Link>
                    </Form>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <section class="py-5" />
                <section class="py-5" />
            </div>
        )
    }
}
