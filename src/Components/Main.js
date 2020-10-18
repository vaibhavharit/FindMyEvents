import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import EventAdd from './event-add.component';
import EventDetail from './event-detail.component';
import EventEdit from './event-edit.component';
import Home from './Home';
import Event from './event.component';
import EventSearch from './event-search.component';
import SearchPage from './event-search-page.component';
import EventIdSearch from './event-id-search.component';
import SearchIdPage from './event-id-search-page';
import Help from './Help';

class Main extends Component {
    
    render() {
        return (
            <div>
                <Router>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link to={'/'} className="navbar-brand">Event Manager</Link>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link to={'/'} className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/events'} className="nav-link">View Events</Link>
                                    </li>
                                </ul>

                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul class="navbar-nav">
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                More Information</a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <a class="dropdown-item" href="http://localhost:3000/event-add">Create New Event</a>
                                                <a class="dropdown-item" href="http://localhost:3000/help">Help</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <Link className="btn btn-primary" to={`/event-search-page/`}>Search Event by Name</Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Link className="btn btn-primary" to={`/event-id-search-page/`}>Search Event by ID</Link>
                            </div>
                        </nav> <br />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/help' component={Help} />
                            <Route path='/events' component={Event} />
                            <Route path='/event-add' component={EventAdd} />
                            <Route path='/event-detail/:id' component={EventDetail} />
                            <Route path='/event-edit/:id' component={EventEdit} />
                            <Route path='/event-search/:name' component={EventSearch} />
                            <Route path='/event-search-page' component={SearchPage} />                            
                            <Route path='/event-id-search/:id' component={EventIdSearch} />
                            <Route path='/event-id-search-page' component={SearchIdPage} />    
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Main;