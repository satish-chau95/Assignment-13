import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    // console.log(process.env.MONGODB_URI)
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error while connecting to database: ", error);
    process.exit(1);
  }
};

export default connectToDB;
