const mongoose = require('mongoose');
const User = require('./user');

const DeliberyPersonSchema = new mongoose.Schema({
    address: { type: String, required: true },
    enabled: { type: Boolean, required: true }
});

module.exports = mongoose.models.DeliberyPerson || User.discriminator('DeliberyPerson', DeliberyPersonSchema);

