import mongoose, { Schema } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in the environment variables.');
}

mongoose.connect(MONGODB_URI);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User",userSchema);

export default User;