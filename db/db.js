const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB_DATABASEURL);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        process.exit(1); // Exit with failure
    }
}

module.exports = connectDB;