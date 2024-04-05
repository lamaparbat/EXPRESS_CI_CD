const mongoose = require('mongoose');

const startMongoConnection = async () => {
    return await mongoose.connect(process.env.MONGO_URI);
}

module.exports = {
    startMongoConnection
}