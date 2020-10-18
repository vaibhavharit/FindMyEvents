const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    name: String,
    content: String, 
    date: String,
    time: String,
    location: String,
    label: String 
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', EventSchema);