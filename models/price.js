const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
        unique: true
    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    },
    
});

module.exports = mongoose.model('Price', priceSchema);