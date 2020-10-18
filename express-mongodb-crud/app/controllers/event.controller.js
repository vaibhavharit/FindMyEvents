const Event = require('../models/event.model.js');


// Create and Save a new Event
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Event content can not be empty"
        });
    }

    // Create an Event
    const event = new Event({
        name: req.body.name || "Untitled Event", 
        content: req.body.content,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        label: req.body.label 
    });

    // Save Event in the database
    event.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Event."
        });
    });
};


// Retrieve and return all Events from the database.
exports.findAll = (req, res) => {
    Event.find()
    .then(events => {
        res.send(events);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Events."
        });
    });
};


// Find a single Event with a eventId
exports.findOne = (req, res) => {
    Event.findById(req.params.eventId)
    .then(event => {
        if(!event) {
            return res.status(404).send({
                message: "Event not found with id " + req.params.eventId
            });            
        }
        res.send(event);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Event not found with id " + req.params.eventId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Event with id " + req.params.eventId
        });
    });
};


// Find an Event by Name
exports.findByName = (req, res) => {
	Event.findOne({ name: req.params.eventName })
	.exec(function (err, event) {
		if (err){
			if(err.kind === 'ObjectId') {
				return res.status(404).send({
					message: "Event not found with given name " + req.params.eventName
				});                
			}
			return res.status(500).send({
				message: "Error retrieving Events with given Id " + req.params.eventName
			});
		}		
		res.send(event);
	});
};


// Update an Event with the specified eventId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Event content can not be empty"
        });
    }

    // Find Event and update it with the request body
    Event.findByIdAndUpdate(req.params.eventId, {
        name: req.body.name || "Untitled Event",
        content: req.body.content, 
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        label: req.body.label 
    }, {new: true})
    .then(event => {
        if(!event) {
            return res.status(404).send({
                message: "Event not found with id " + req.params.eventId
            });
        }
        res.send(event);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Event not found with id " + req.params.eventId
            });                
        }
        return res.status(500).send({
            message: "Error updating Event with id " + req.params.eventId
        });
    });
};


// Delete an Event with the specified eventId in the request
exports.delete = (req, res) => {
    Event.findByIdAndRemove(req.params.eventId)
    .then(event => {
        if(!event) {
            return res.status(404).send({
                message: "Event not found with id " + req.params.eventId
            });
        }
        res.send({message: "Event deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Event not found with id " + req.params.eventId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Event with id " + req.params.eventId
        });
    });
};
