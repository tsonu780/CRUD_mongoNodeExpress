const mongoose = require('mongoose');

const agentModel = new mongoose.Schema({
    AgencyId: {type: String, required: true, unique: true },
    Name: { type: String, required: true},
    Address1: { type: String, required: true },
    Address2: { type: String},
    State: { type: String, required: true},
    City: { type: String, required: true },
    PhoneNumber: { type: Number, required: true },
})

module.exports = mongoose.model("Agent", agentModel);
