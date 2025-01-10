import mongoose from "mongoose";

let isConnected = false; // Tracks the connection status

export async function ensureDbConnected() {
    if (isConnected) {
        console.log("Database is already connected.");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "Autho", // Replace with your database name
        });
        isConnected = true;
        console.log("Database connection successful.");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw new Error("Database connection failed!");
    }
}

