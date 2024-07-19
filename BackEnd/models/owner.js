const mongoose = require('mongoose');
const User = require('./user');

const OwnerSchema = new mongoose.Schema({
});

module.exports = mongoose.models.Owner || User.discriminator('Owner', OwnerSchema);

