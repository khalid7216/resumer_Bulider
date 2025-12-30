const mongoose = require('mongoose');


const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n MONGO_DB CONNECTED !!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGO_DB CONNECTION Failed!!",error);
        process.exit(1);
    }
}

module.exports = connectDB;