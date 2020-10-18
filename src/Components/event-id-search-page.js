import React, { Component } from 'react';
import { Form, FormControl } from "react-bootstrap";
import {  Link } from "react-router-dom";


export default class SearchIdPage extends Component {

    state = {
        searchId: "",
    };

    handleSearchInput = event => {
        this.setState({
            searchId: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <section class="py-5">
                    <div class="container">
                        <h1>Search Event by its ID</h1>
                        <p class="lead">Enter the ID of an existing event to search.</p>
                    </div>
                </section>
                <div>
                    <Form inline>
                        <FormControl
                            onChange={this.handleSearchInput}
                            value={this.state.searchId}
                            type="text"
                            placeholder="Enter the ID of an Event"
                            className="form-control w-100"
                        />
                        <br /><br /><br />
                        <Link className="btn btn-info" to={`/event-id-search/${this.state.searchId}`}>Search Event ID</Link>
                    </Form>
                &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <section class="py-5" />
                <section class="py-5" />
            </div>
        )
    }
}
