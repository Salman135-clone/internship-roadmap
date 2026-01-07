const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, min: [10, "Price cannot be less than 10"] },
    quantity: { type: Number, required: true, min: [1, "Quantity cannot be less than 1"] }
}, { timestamps: true })

module.exports = mongoose.model("Product", productSchema)