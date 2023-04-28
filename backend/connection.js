import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async () => {
    return mongoose.connect(
      process.env.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
};
