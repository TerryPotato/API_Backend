const mongoose = require('mongoose')

const connectDB = async () => {
    try {
<<<<<<< HEAD
        const conn = await mongoose.connect(process.env.Mongo_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch(error){
        console.error(error)
        process.exit(1)

=======
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(error)
        process.exit(1)
>>>>>>> 16ce38814bb749aae0199bcb8252fa336d7daa45
    }
}

module.exports = connectDB