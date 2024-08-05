const mongoose = require('mongoose');
const User = require('./user');

const DeliveryPersonSchema = new mongoose.Schema({
    address: { type: String, required: false },
    enabled: { type: Boolean, required: true }
});

module.exports = mongoose.models.DeliveryPerson || User.discriminator('DeliveryPerson', DeliveryPersonSchema);

