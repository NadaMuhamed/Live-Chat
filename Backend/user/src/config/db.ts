import mongoose from "mongoose";
export const connectDB = async () => {
    const dbURI = process.env.MONGO_URI;
    if (!dbURI) {
        throw new Error("MONGO_URI is not defined in the environment variables");
    }
    try {
        await mongoose.connect(dbURI,
            {dbName: "Chatappmicroservice",}
        );
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;