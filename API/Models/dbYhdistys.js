//* yhdistämine mongoose 
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://devrajkharal05:Fa0wHVoABeO7AUYV@cluster0.zhoea.mongodb.net/", {
      dbName: "ReMarket"
    });
    console.log("MongoDB connected...!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

export const closeDB = async () => {
  try {
    await mongoose.connection.close();
    console.log("MongoDB connection closed.");
  } catch (err) {
    console.error("Error closing MongoDB connection:", err.message);
  }
};
