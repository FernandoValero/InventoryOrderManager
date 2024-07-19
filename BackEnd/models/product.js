const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductSchema = new Schema({
 number : { type: String, required: true },
 barCode: { type: String, required: true },
 name: { type: String, required: true },
 price: { type: Number, required: true },
 quantity: { type: Number, required: true },
 description : { type: String, required: true},
 category: { type: String, required: true},
 purchaseDate: { type: Date, required: true },
 expirationDate: { type: Date, required: true },
 supplier : { type: String, required: true},
})

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);