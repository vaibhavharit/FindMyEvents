module.exports = (app) => {
    const events = require('../controllers/event.controller.js');

    // Create a new event
    app.post('/events', events.create);

    // Retrieve all events
    app.get('/events', events.findAll);

    // Retrieve a single event with eventId
    app.get('/events/id/:eventId', events.findOne);

    // Retrieve event by name
    app.get('/events/name/:eventName', events.findByName);

    // Update a event with eventId
    app.put('/events/:eventId', events.update);

    // Delete a event with eventId
    app.delete('/events/:eventId', events.delete);
}