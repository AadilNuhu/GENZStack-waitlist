const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to db")
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        process.exit(1)
    }
}

module.exports = connectDB