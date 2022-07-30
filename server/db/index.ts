import mongoose from "mongoose";

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};

run();
