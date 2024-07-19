const mongoose = require('mongoose');
const { Schema } = mongoose;

const SupplierSchema = new Schema({
    number : { type: String, required: true },
    name : { type: String, required: true },
    lastName : { type: String, required: true },
    phoneNumber : { type: String, required: true },
    email : { type: String, required: true },
    company : { type: String, required: true },
})

module.exports = mongoose.models.Supplier || mongoose.model('Supplier', SupplierSchema);