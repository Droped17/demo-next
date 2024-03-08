import mongoose, { Schema } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in the environment variables.');
}

mongoose.connect(MONGODB_URI);
mongoose.Promise = global.Promise;

const postSchema = new Schema(
  {
    author: String, 
    title: String,
    detail: String,
    createdAt: Date,
    avatar: String,
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
