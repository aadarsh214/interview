const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    categoryId: {
        type: String,
        required: true,
        unique: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    
});

exports = mongoose.model('Service', serviceSchema);
