const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true }
}, { discriminatorKey: 'role', collection: 'users' });

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
