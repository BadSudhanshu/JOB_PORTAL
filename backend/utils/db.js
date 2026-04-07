import mongoose from "mongoose";  

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI || "mongodb+srv://Rishikesh:gmANw5USj0uJgMAp@jobportal.kijruqf.mongodb.net/?appName=JOBPORTAL";
        if (!uri) throw new Error('MONGO_URI is not defined');
        await mongoose.connect(uri);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log('MongoDB connection error:', error);
    }
}
export default connectDB;