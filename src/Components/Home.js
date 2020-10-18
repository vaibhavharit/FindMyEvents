import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url("https://unsplash.it/1900/1080?image=1081")`,backgroundRepeat: 'no-repeat' }}>
                <section class="py-5">
                    <div class="container">
                        <h1>Welcome to Find My Event!</h1>
                        <p class="lead">An easy stop to manage all your events.</p>
                        <p>With this event manager API, you can add / udpate / delete / search your events according to your needs. 
                            A quick and fast way to organize and manage all your events at a single place.  
                        </p>
                    </div>
                </section>

                <section class="py-5">
                    <div class="container">
                        <h1>Get started by clicking on the View Events link above</h1>
                        <p class="lead">Add events to view them all in a single place</p>
                        <p>Click on the "Add New Event" button and fill the details to add the event. To Delete an event and Edit the details of an event, click on "Manage" link under the Actions column for the event.</p>
                        <p>Use the Search buttons above to search an event by its Name or its ID.</p>
                    </div>
                </section>

                <section class="py-5">
                    <div class="container">
                        <h1>Assisstance</h1>
                        <p class="lead">For support, select "Help" section under "More Information" dropdown in the navbar.</p>
                    </div>
                </section>
            </div>
        )
    }
}
