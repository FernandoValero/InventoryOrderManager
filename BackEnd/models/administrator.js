const mongoose = require('mongoose');
const User = require('./user');

const AdministratorSchema = new mongoose.Schema({
    address: { type: String, required: true },
    enabled: { type: Boolean, required: true }
});

module.exports = mongoose.models.Administrator || User.discriminator('Administrator', AdministratorSchema);

