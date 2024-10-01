const mongoose = require('mongoose');
const User = require('./user');

const ClientSchema = new mongoose.Schema({
    address: { type: String, required: false },
    enabled: { type: Boolean, required: true }
});

module.exports = mongoose.models.Client || User.discriminator('Client', ClientSchema);

