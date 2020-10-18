import React, { Component } from 'react';

export default class Help extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url("https://unsplash.it/1900/1080?image=1081")`,backgroundRepeat: 'no-repeat' }}>
                <section class="py-5">
                    <div class="container">
                        <h1>Adding Event</h1>
                        <p class="lead">Go to "View Events" and then "Add New Event".</p>
                    </div>
                </section>
                <section class="py-5">
                    <div class="container">
                        <h1>View all existing Events</h1>
                        <p class="lead">Click on "View Events" from the navbar.</p>
                    </div>
                </section>
                <section class="py-5">
                    <div class="container">
                        <h1>Delete an Event</h1>
                        <p class="lead">Select the event to be deleted from "View Events" page by clicking on the "Manage" event link under the actions column. 
                        Click on "Delete Event" at the event detail page.</p>
                    </div>
                </section>
                <section class="py-5">
                    <div class="container">
                        <h1>Edit the details of an existing Event</h1>
                        <p class="lead">Select the event to be edited from "View Events" page by clicking on the "Edit" event button under the actions column. 
                        Edit all the necessary fields and click on the "Update Event" button to save it.</p>
                    </div>
                </section>
                <section class="py-5">
                    <div class="container">
                        <h1>Searching Events</h1>
                        <p class="lead">Click on "Search Event by Name" button from the navbar and enter the name of the Event to be searched.
                        Click on "Search Event by ID" button from the navbar and enter the ID of the Event to be searched.</p>
                    </div>
                </section>
            </div>
        )
    }
}
