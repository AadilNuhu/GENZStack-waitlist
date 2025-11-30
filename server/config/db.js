const mongoose = require('mongoose')

const connectDB = async () => {
    const uri = process.env.MONGO_URI
    if (!uri) {
        console.error('MONGO_URI not set in environment. Check', 'server/.env')
        process.exit(1)
    }

    try {
        const conn = await mongoose.connect(uri)
        console.log(`Connected to MongoDB: ${conn.connection.host}`)
        console.log('Connected to DB:', mongoose.connection.name);
    } catch (error) {
        console.error('MongoDB connection error:')
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB