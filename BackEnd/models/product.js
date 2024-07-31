const mongoose = require('mongoose');
const supplier = require('./supplier');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    number : { type: String, required: true },
    barCode: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    description : { type: String, required: true },
    category: { type: String, required: true },
    expirationDate: { type: Date, required: true },
    creationDate: { type: Date, required: true },
    supplier: { type: Schema.Types.ObjectId, ref: supplier, required: true },
})

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);